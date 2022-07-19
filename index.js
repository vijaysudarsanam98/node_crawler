const express = require('express');
const port = process.env.PORT || 3000
const crawler=require('./crawlerService')
const knex=require('./models/knex')
const model=require('./models/website')
const website=require('./models/website')


const bodyParser = require('body-parser');
const app = express();
let url='https://www.trueinsights.co/'
const database = require('./sqlConnection');
const { json } = require('body-parser');



//initialize sentry logging


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//default GET request
app.get(['/', '/health'], function (req, res) {
    res.send('Crawler is up');
    

});



// app.post('/api/users',async (req, res) =>{
  
//  let name= req.body.name
//    let users =({
//       name
   
//     });
//     console.log(users)
    
//     await model.create(users)
//     if(users) return res.status(200).json({'message':'success','response_objects':null});
    
      
//       });



app.listen(port, async function () {
    console.log(`crawler is up: ${process.env.NODE_ENV}`);
  await website.singleRowInsert(url)

  

  let websiteId= await website.getWebsiteId()
  console.log(websiteId)



   await crawler.crawlAllUrls(url,websiteId)




 
 //console.log(x)
               //  console.log('crawler.crawlAllUrls()');
   

});



