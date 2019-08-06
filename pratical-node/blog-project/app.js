const express = require('express');
const http = require('http');
const path = require('path');

let app = express();

app.set('appName', 'hello-advanced');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.all('*', function(req, res) {
  res.render('index', { msg: 'Welcome to practical Node.js' });
});

const server = http.createServer(app)
const boot = () => {
  server.listen(app.get('port'), () => {
    console.info(`Express server listening on port ${app.get('port')}`)
  })
}
const shutdown = () => {
  server.close()
}
if (require.main === module) {
  boot() // "node app.js" command
} else {
  console.info('Running app as a module')
  exports.boot = boot
  exports.shutdown = shutdown
  exports.port = app.get('port')
}
