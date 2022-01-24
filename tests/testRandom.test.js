const { randomMinMax } = require('../src/helper/random');

test('random test', async () => {
  expect(randomMinMax(10, 30)).toBeTruthy();
});
