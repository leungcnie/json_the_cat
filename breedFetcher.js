const request = require('request');

const name = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

request(URL, (err, response, body) => {
  // body object that's value is an array of an object
  const data = JSON.parse(body);
  if (data.length !== 0) {
    const description = data[0].description
    console.log(description);
  } else {
    console.log(`Breed ${name} not found`);
  }
})