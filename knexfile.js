const knex = require("knex");
module.exports = {

 

  development: {
    client: 'mysql',
    connection: {
      database: 'crawler_project',
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