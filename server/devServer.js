import express from 'express';
// var bodyParser = require('body-parser');

var cors = require('cors');

import webpack from 'webpack';
import path from 'path';

import config from '../webpack.config.dev';


const app = express();

const compiler = webpack(config);


app.options('*', cors());


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../testCode/index.html'));
});


app.listen(3002);
console.log('Listening on port 3002...');
