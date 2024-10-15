const express = require('express');
const movieRouter= require('./routes/movieRoutes')
const userRouter= require('./routes/userRoutes')
const cors = require('cors');
const path = require('path'); // Import path module for consistency


const app = express()

app.use(express.json());

// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow only your frontend
//   optionsSuccessStatus: 200, // Some legacy browsers choke on 204
// };

app.use(cors());

app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });


  //routes
  app.use('/api/v1/movies', movieRouter);
  app.use('/api/v1/users', userRouter);
 

  module.exports = app;