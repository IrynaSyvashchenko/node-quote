const app = require('./app');
//Start our server so that it listens for HTTP requests!
let port = 5000;

const lodash = require('lodash');

app.listen( port, function () {
  console.log("Your app is listening on port " + port);
});
