const https = require('https');
const axios = require('axios').default;
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('axios test', async () => {
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  
    try {
    const response = await axios.get('https://www.google.com/not_found', {httpsAgent: agent});
    console.log(response);
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
});
