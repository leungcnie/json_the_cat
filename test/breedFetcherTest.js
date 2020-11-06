// breedFetcherTest.js

const fetchBreedDescription = require('../breedFetcher-refactor');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error for invalid breed name "heehoo" via callback', (done) => {
    fetchBreedDescription('heehoo', (err, desc) => {
      // expect null description
      assert.equal(desc, null);

      const expectedErr = {Error: "Breed name heehoo is invalid"};

      // compare returned description
      assert.equal(expectedErr.Error, err.Error);

      done();
    });
  });
});
