'use strict'
var knex = require('../pg-connection');


class User {
  static *getAllUserActivity() {
    return  yield knex.select().from('useractivity');
  }


}
module.exports = User;