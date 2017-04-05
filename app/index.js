const app = require('express')();

const auth = require('./routes/auth');

app.route(auth(app))

app.set('port', 8080 || process.env.production.port);

module.exports =  app;