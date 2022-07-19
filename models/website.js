var knex = require('./knex');
const db=require('../sqlconnection')
var stringify = require('json-stringify-safe');
const { json } = require('body-parser');


//   module.exports={
//     get:function () {
//         knex
//         .select('id')
//       .from('websites')
//       .orderBy('id','desc')
//       .limit('1')
//       .then(function(users) {
//       console.log(users[0].id) 
//       return users[0].id
//       })
//     }
// }



    // },
//     create:function (user) {
//         console.log('before insert');
//         console.log(user)
//          knex('websites').insert(user,'id').returning('id')
//         .then(([id]) => console.log(id))
        
//     }
// }
   
// module.exports. create = async(user) => {
//     let result = await   knex('websites').insert(user,'id').returning('id').
//     then(([id]) =>  {
//         console.log(id)
//         return id
//     }
//     )
//     console.log(result)
//         return result

//   }


//   module.exports.create = async function (name) {
//     let sqlQuery = 'INSERT INTO websites(name) VALUES($1) RETURNING id';
//     console.log(sqlQuery)
    
// }

// Function to insert single row values in
// the database
// module.exports.create = async function (name) {
//     let query = 'INSERT INTO websites(name) VALUES($1)';
//     console.log(query)

//     let response = await db.asyncExecuteSql(query, [name]);
    
//     return response.rows[0].id;
// }


// Function to insert single row values in
// the database
module.exports.singleRowInsert =  async function (name)  {
console.log(name)
	let query =  `INSERT INTO WEBSITES(name) VALUES(?); `
  console.log(query)
    //let query2=     `SELECT ID FROM WEBSITES ORDER BY ID DESC LIMIT 1`
    let response =  await db.executeSql(query, [name]);
   // let response2=db.executeSql(query2);
   console.log(response.message)

}


module.exports. getWebsiteId = async function ()  {
  let result = await knex.select('id').from('websites').orderBy('id','desc')
  .limit('1')
  console.log(result)
  return result[0].id;
}

// 	Value to be inserted
//  let z=   db.query(query, [name
//         ], (err, rows) => {
//             if (err) throw err;
//             // console.log("Row inserted with id = "
//             //     + rows.insertId);
                
//                 console.log(rows.insertId)
//                 //return rows.insertId
//         } 
        
//         );

//         const str = .stringify(x);
// console.log("rows with =x" + JSON.stringify(str))
	// Creating queries
    
//}



 //}

 module.exports.siteInsert = async function (name,websiteId) {
  console.log("website id on insert" + websiteId)

	let query =  `INSERT INTO URLS(crawled_sites,website_id,is_new) VALUES(?,?,?); `
    //let query2=     `SELECT ID FROM WEBSITES ORDER BY ID DESC LIMIT 1`
    let response =  await db.executeSql(query, [name,websiteId,false]);
    console.log(query)
   // let response2=db.executeSql(query2);
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
  console.log('before inser')
  let query =  ` update urls  set is_new=true
  where id in(SELECT id FROM urls where created_at >= now() - INTERVAL 1 DAY )   `
  let response =  await db.executeSql2(query);
    console.log(response)


   // let response2=db.executeSql(query2);
  
}
