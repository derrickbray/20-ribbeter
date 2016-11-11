'use strict';

const Schema = use('Schema');

class RibbitSchema extends Schema {

  up() {
    this.create('ribbits', (table) => {
      table.increments();
      table.integer('user_id').references('users.id');
      table.text('content');

      table.timestamps();
    });
  }

  down() {
    this.drop('ribbits');
  }

}

module.exports = RibbitSchema;
