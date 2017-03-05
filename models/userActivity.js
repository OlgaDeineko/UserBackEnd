'use strict'
var knex = require('../pg-connection');


class User {
  static *getAllUserActivity() {
    return  yield knex.select('*').from('useractivity');
  }
  static *saveUserActivity(activity) {
    return  yield knex('useractivity').insert(activity);
  }
  static *deleteAllUserActivity() {
  return  yield knex('useractivity').del();
}

}
module.exports = User;