'use strict'

const router = require('koa-router')(),
  user = require('../../models/userActivity'),
  parse = require('co-body');

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
function *saveUserActivity() {
  try {
  let activity = yield parse(this);
  yield user.saveUserActivity(activity);
    this.status = 201;
}  catch (err) {
  console.log(err);
  this.status = 500;
  this.body = {error: err.message}
}
}
function *deleteUserActivity() {
    try {
      let result = yield user.deleteAllUserActivity();
      this.status = 410;
      this.body = result;
    } catch (err) {
      console.log(err);
      this.status = 500;
      this.body = {error: err.message}
    }
  }
module.exports = {
  getUserActivity: getUserActivity,
  saveUserActivity:saveUserActivity,
  deleteUserActivity:deleteUserActivity
}