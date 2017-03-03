/**
 * Created by Worker on 05.11.2016.
 */
'use strict'

const router = require('koa-router')(),
  user = require('../../models/userActivity');

function *getUserActivity() {
  try {
    let result = yield user.getAllUserActivity();
    this.status = 200;
    this.body = result;
  } catch (err) {
    console.log(err);
    this.status = 500;
    this.body = {error: err.message}
  }
}



module.exports = {
  getUserActivity: getUserActivity
}