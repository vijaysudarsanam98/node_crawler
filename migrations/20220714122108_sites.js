const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('sites', function(table) {

        table.increments('id').primary();
        table.string('crawled_sites');
        table.integer('websiteid',11).unsigned().nullable()

       table.foreign('websiteid').references('websites.id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('sites');
  
};

