// CHEERIO!


const request = require('request');
const cheerio = require('cheerio');


const url = 'https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population';

request(url, (err, response, body) => {
  if (!err && response.statusCode === 200) {
    let $ = cheerio.load(body);
    let countriesList = $('.flagicon');
    countriesList.each((idx, item) => {
      console.log((idx + 1) + '.', $(item).next().text());
    })
  }
});