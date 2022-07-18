const knex = require("knex");
module.exports = {

 

  development: {
    client: 'mysql',
    connection: {
      database: 'db_crawler',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      
    }
  }

  

}