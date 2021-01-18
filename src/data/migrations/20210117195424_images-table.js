
exports.up = function(knex) {
    return knex.schema
      .createTable('images', (tbl) => {
          tbl.increments();
          tbl.integer('user_id')
              .notNullable()
              .unsigned()
              .references('id')
              .inTable('users')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          tbl.text('image_url').notNullable();
          tbl.string('tag').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('images')
  };
  