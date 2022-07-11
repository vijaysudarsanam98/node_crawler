const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const crawler=require('./crawlerService')

//initialize sentry logging


//default GET request
app.get(['/', '/health'], function (req, res) {
    res.send('Crawler is up');
});

app.listen(port, async function () {
    console.log(`crawler is up: ${process.env.NODE_ENV}`);
   
         crawler.crawlAllUrls('https://www.trueinsights.co/')
        console.log('crawler.crawlAllUrls()');

   

});




