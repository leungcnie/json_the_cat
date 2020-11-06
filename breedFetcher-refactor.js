const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (err, response, body) => {
    if (err) { // if typo domain
      callback(err, null);
    } else if (response === undefined) { // if keysmash URL
      let err = {Error: "${URL} is not a valid URL"};
      callback(err, null);
    } else if (JSON.parse(body).length === 0) { // if invalid breed name
      let err = {Error: `Breed name ${breedName} is invalid`};
      callback(err, null);
    } else { // if no error
      const data = JSON.parse(body);
      const description = data[0].description;
      callback(null, description);
    }
  });
};

module.exports = fetchBreedDescription;