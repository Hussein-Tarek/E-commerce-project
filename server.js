const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path:'./config.env'});
const userRouter = require('./routes/userRoutes');

app.use(express.json());


const port = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/E-commerce').then(() => console.log('connected to db successfully'));
app.listen(port,() => console.log(`Server is running on http://localhost:${port}`));

app.use('/users', userRouter);