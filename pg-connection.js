
'use strict';
var ENV = process.env.NODE_ENV;
var props ={
  local : {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '586393',
      database: 'usergithub',
      port: 5432

    }
  },
  heroku:{
    client: 'pg',
    connection: {
      host: 'ec2-23-21-204-166.compute-1.amazonaws.com',
      user: 'ispotzewzvcuvz',
      password: 'c35d5418f6c1cd4575b5b987bf243b05da319c25fc4238b7e660b7e6074534a4',
      database: 'd76r6um0kd7a3h',
      port: 5432

    }

  }
};



var configs = props[process.env.NODE_ENV] || props.local;
var knex = require('knex')(configs);


module.exports = knex;