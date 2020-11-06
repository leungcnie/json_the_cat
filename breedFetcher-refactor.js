const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (err, response, body) => {
    if (err) { // if typo domain
      callback(err, body);
    } else if (response === undefined) { // if keysmash URL
      let err = {Error: "Invalid URL"};
      callback(err, body);
    } else if (JSON.parse(body).length === 0) { // if invalid breed name
      let err = {Error: "Invalid or non-existant breed name"};
      callback(err, body);
    } else { // if no error
      const data = JSON.parse(body);
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = fetchBreedDescription;