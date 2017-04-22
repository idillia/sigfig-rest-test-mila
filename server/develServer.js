var express = require('express');
// var bodyParser = require('body-parser');

var cors = require('cors');

var webpack = require('webpack');
var path = require('path');

var config = require('../webpack.config');


var app = express();

var compiler = webpack(config);
app.options('*', cors());

// app.use(cors({
//     origin: ['http://localhost:3001'],
//     credentials: true
// }));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  lazy: true,
  quiet: false

}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../testCode/index.html'));
});


app.listen(3002);
console.log('Listening on port 3002...');
