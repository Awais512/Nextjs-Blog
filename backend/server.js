const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { connectDb } = require('./db');
dotenv.config({ path: `${__dirname}/.env` });

connectDb();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
