const express = require('express');

const app = express();
const cors = require('cors');
const mysql = require('mysql');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const port = process.env.PORT || 5000;
require('dotenv').config();

app.get('env');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use(express.static('../public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
