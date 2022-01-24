const { getAllGenerate } = require('../function/getAllGenerate');

module.exports = async (req, res) => {
  const value = await getAllGenerate();
  res.status(200).send(value.data);
};
