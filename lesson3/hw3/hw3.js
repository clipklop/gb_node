// NodeJS Network requestes homework.


const request = require('request');
const cheerio = require('cheerio');


const url = 'https://en.wikipedia.org/wiki/List_of_UFC_events';

request(url, (err, res, body) => {
  if (!err && res.statusCode === 200) {
    const $ = cheerio.load(body);
    const scheduledEvents = $('table#Scheduled_events tr td:first-child'); // :nth-child(-n+2)
    scheduledEvents.each((idx, item) => {
      console.log(`${$(item).text()} on ${$(item).next().text()}`)
    })
    
  }

});