import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const indexRouter = require('./routes/index');


const port = process.env.PORT || 5000;
const hostname = process.env.DB_HOST;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

app.get('env');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

//MongoDB Connection
mongoose.Promise = global.Promise;
const uri = `mongodb+srv://${username}:${password}@${hostname}`;
mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', indexRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
