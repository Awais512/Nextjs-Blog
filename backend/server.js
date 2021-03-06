const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { connectDb } = require('./db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
dotenv.config({ path: `${__dirname}/.env` });

//Route files
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const tagRoutes = require('./routes/tagRoutes');

//Connect to database
connectDb();

//Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mounting Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tags', tagRoutes);

//Custom Error Habdler
app.use(notFound);
app.use(errorHandler);

//Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
