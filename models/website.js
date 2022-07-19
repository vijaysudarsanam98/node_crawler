var knex = require('./knex');
const db=require('../sqlconnection')
var stringify = require('json-stringify-safe');
const { json } = require('body-parser');





module.exports.singleRowInsert =  async function (name)  {
console.log(name)
	let query =  `INSERT INTO WEBSITES(name) VALUES(?); `
  console.log(query)
    let response =  await db.executeSql(query, [name]);
   console.log(response.message)

}


module.exports. getWebsiteId = async function ()  {
  let result = await knex.select('id').from('websites').orderBy('id','desc')
  .limit('1')
  console.log(result)
  return result[0].id;
}


 module.exports.siteInsert = async function (name,websiteId) {
  console.log("website id on insert" + websiteId)

	let query =  `INSERT INTO URLS(crawled_sites,website_id,is_new) VALUES(?,?,?); `
    let response =  await db.executeSql(query, [name,websiteId,false]);
    console.log(query)
   console.log(response.message)

}


module.exports.checkNewSite = async function ()  {
  let result = await knex.select('id').from('urls').where('created_at' ,'>=', 'now() - INTERVAL 1 DAY')
  console.log(result)
  if (result != null && result !== undefined && result.length>0 ) {
    return JSON.stringify (result)
} else {
    return false;
}
  
}



module.exports.updateNewSite = async function ()  {
  console.log('before insert')
  let query =  ` update urls  set is_new=true
  where id in(SELECT id FROM urls where created_at >= now() - INTERVAL 1 DAY )   `
  let response =  await db.executeSql2(query);
    console.log(response)


  
}
