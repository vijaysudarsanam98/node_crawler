const Knex = require("knex");



exports.up = function(knex,Promise) {
    return knex.schema.createTable('urls', function(table) {

        table.increments('id').primary();
        table.string('crawled_sites');
        table.integer('website_id',11).unsigned().nullable()
        table.boolean('is_new')
        table.foreign('website_id').references('websites.id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        

        

        });
    };

              
        
        


  
exports.down = function(knex,Promise) {
    return knex.schema.dropTable('urls');
  
};
