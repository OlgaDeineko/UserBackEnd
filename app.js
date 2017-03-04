const koa = require('koa'),
      cors = require('koa-cors'),
      app  = koa(),
      mount = require('koa-mount'),
      route = require('koa-route'),
      parse = require('co-body'),
      userActivityController = require('./components/userActivity/userActivity.ctrl.js');

//  function *allowCrossDomain(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }
// app.use(allowCrossDomain);
app.use(cors());
app.use(route.get("/useractivity", userActivityController.getUserActivity));


var port = process.env.PORT||3000;
app.listen(port);
console.log("Aplication started work on port 3000");

module.exports = app;
