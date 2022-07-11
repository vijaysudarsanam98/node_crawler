const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('site', function(table) {

        table.integer('id').primary();
        table.string('crawled_sites');
        table.integer('websiteid').nullable();

       table.foreign('websiteid').references('websites.id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('site');
  
};

