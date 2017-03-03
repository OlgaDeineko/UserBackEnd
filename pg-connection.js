/**
 * Created by Worker on 08.01.2017.
 */
'use strict';
var ENV = process.env.NODE_ENV;
var props ={
  heroku:{
    client: 'pg',
    connection: {
      host: 'ec2-54-228-212-74.eu-west-1.compute.amazonaws.com',
      user: 'iygqdbpipxdgtd',
      password: 'e1e23624cf7ef3584bb01da7d2939ce39742e0f4ef94661aa6f318dc9a0a24f7',
      database: 'd8err25c2g5oh9',
      port: 5432

    },

  }
};



var configs = props[process.env.NODE_ENV] || props.local;
var knex = require('knex')(configs);


module.exports = knex;