const axios = require('axios');
const { randomMinMax } = require('../../../helper/random');

const url = 'http://127.0.0.1:4040/planet/randomPlanet';

async function requestToApi() {
  return axios.get(url);
}
function timer(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function generate() {
  const wait = randomMinMax(100, 3000);
  const errorRand = randomMinMax(1, 3);
  await timer(wait);
  if (errorRand === 1) {
    throw new Error();
  }
  return requestToApi();
}

module.exports.getAllGenerate = async () => {
  let i = 0;
  const array = [];
  while (i < 100) {
    i += 1;
    try {
      array.push(generate());
    } catch (error) {
      console.log(error);
    }
  }
  try {
    const value = await Promise.any(array);
    return value;
  } catch (error) {
    this.getAllGenerate();
  }
};
