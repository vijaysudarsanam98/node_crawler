var knex = require('./knex');
const db=require('../sqlconnection')
var stringify = require('json-stringify-safe');


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

module.exports. getWebsiteId = async() => {
    let result = await knex.select('id').from('websites').orderBy('id','desc')
    .limit('1')
    return result[0].id;
  }

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

	let query =  `INSERT INTO WEBSITES(name) VALUES(?); `
    //let query2=     `SELECT ID FROM WEBSITES ORDER BY ID DESC LIMIT 1`
    let response =  await db.executeSql(query, [name]);
   // let response2=db.executeSql(query2);
   console.log(response.message)

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

	let query =  `INSERT INTO SITES(crawled_sites,websiteid) VALUES(?,?); `
    //let query2=     `SELECT ID FROM WEBSITES ORDER BY ID DESC LIMIT 1`
    let response =  await db.executeSql(query, [name,websiteId]);
   // let response2=db.executeSql(query2);
   console.log(response.message)

}