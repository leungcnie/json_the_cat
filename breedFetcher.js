const request = require('request');

const name = process.argv[2];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

request(URL, (err, response, body) => {
  if (err) console.log("Oops! An error occurred:\n", err);

  const data = JSON.parse(body);   // data is obj with "body" key and value is an array of an object
  if (data.length !== 0 && data !== undefined) {
    const description = data[0].description;
    console.log(description);
  } else {
    console.log(`Breed ${name} not found`); // if breed not found
  }
});