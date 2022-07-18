// Importing MySQL module
const mysql = require("mysql");


// Creating connection
const pool = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "db_crawler"
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