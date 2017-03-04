'use strict'
var knex = require('../pg-connection');


class User {
  static *getAllUserActivity() {
    return  yield knex.select('*').from('useractivity');
  }
  static *getAllType() {
    return  yield knex.select().from('product_type');
  }

}
module.exports = User;