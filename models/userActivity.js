/**
 * Created by Worker on 05.11.2016.
 */
'use strict'
var knex = require('../pg-connection');


class User {
  static *getAllUserActivity() {
    return  yield knex.select().from('userActivity');
  }


}
module.exports = User;