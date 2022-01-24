module.exports = (min, max) => {
  const rand = min + Math.random() * (max - min);
  return Math.floor(rand);
};
