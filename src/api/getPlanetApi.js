const axios = require('axios');

module.exports.getPlanetWrapper = async (planetId) => {
  const errorThreshhold = 0.5;
  const minResponseTime = 100;
  const maxResponseTime = 3000;

  const shouldBeError = Math.random() <= errorThreshhold;
  const responseTime = Math.floor(
    minResponseTime + Math.random() * (maxResponseTime - minResponseTime),
  );

  const shouldRequestProceed = await new Promise((resolve, reject) => setTimeout(() => (shouldBeError ? reject() : resolve()), responseTime))
    .then(() => true)
    .catch(() => false);

  if (shouldRequestProceed) {
    return axios.get(`https://swapi.dev/api/planets/${planetId}`);
  }
  throw new Error('Goddam API breaks again!!!');
};
