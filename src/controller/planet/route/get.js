const { getPlanetWithCache } = require('../function/getPlanetWithCache');

module.exports = async (req, res) => {
  const value = getPlanetWithCache();
  res.status(200).send(value);
};
