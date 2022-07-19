// Importing MySQL module
const mysql = require("mysql");


// Creating connection
const pool = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "final"
});


// pool.connect((err) => {
//     if (err) {
//       console.log("Database Connection Failed !!!", err);
//     } else {
//       console.log("connected to Database");
//     }
//   });
    


//   module.exports = pool


  let resContent = {};

exports.executeSql =  async function (query, params) {
    try {
        const result = await pool.query(query, params);
        resContent.message = 'Success.';
        resContent.success = true;
        resContent.rows = result.rows || null;
        console.log(resContent)
        return resContent;
    } catch (err) {
       console.log(err)
    }
}



let resContent2 = {};

exports.executeSql2 =  async function (query) {
  console.log(query)
    try {
        const result = await pool.query(query);
        resContent2.message = 'Success.';
        resContent2.success = true;
        resContent2.rows = result.rows || null;
        console.log(resContent2)
        return resContent2;
    } catch (err) {
       console.log(err)
    }
}