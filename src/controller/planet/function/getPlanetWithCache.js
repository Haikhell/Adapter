const { getPlanetWrapper } = require('../../../api/getPlanetApi');

const cache = [];
const timeToRequest = 1000;
const countCache = 10;
const minRandom = 1;
const maxRandom = 60;
let counterRequest = 1;

function sendRequestToApi() {
  new Promise((res, rej) => {
    const planetId = Math.floor(
      minRandom + Math.random() * (maxRandom - minRandom),
    );
    getPlanetWrapper(planetId).then((value) => {
      counterRequest = 1;
      if (cache.length < countCache) cache.push(value.data);
    }).catch((value) => { });
  });
}

function callSendRequest() {
  if (cache.length < countCache) {
    try {
      sendRequestToApi();
      counterRequest += 1;
    } catch (error) {
      console.log(error);
    }
  }
  setTimeout(callSendRequest, timeToRequest * cache.length * counterRequest);
}

callSendRequest();

module.exports.getPlanetWithCache = () => {
  const startDelete = 0;
  const countDelete = 1;
  const planet = cache.splice(startDelete, countDelete)[0];
  return planet;
};
