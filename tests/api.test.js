const { getAllGenerate } = require('../src/controller/planet/function/getAllGenerate');

test('route test ', async () => {
  const value = await getAllGenerate();
  console.log(value);
  expect(value.data.value.name).toBeTruthy();
});
