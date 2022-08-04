const axios = require('axios').default;
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('axios test', async () => {
  // const response = await axios.get('https://www.google.com/not_found');
  const response = await fetch('https://www.google.com/not_found');
  console.log(response);
});
