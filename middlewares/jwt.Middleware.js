//var express = require('express');
//var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');

//var port = process.env.PORT || 8080;

const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-qrqxbza8.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:4000/',
    issuer: 'https://dev-qrqxbza8.us.auth0.com/',
    algorithms: ['RS256']
});

const checkPermissions = jwtAuthz(["read:users", "update:users"], {
    customScopeKey: "permissions",
    checkAllScopes: true
  });


/*
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);
*/

module.exports = jwtCheck, checkPermissions;