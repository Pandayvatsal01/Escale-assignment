const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routes/itemRoutes.js');
const bodyParser= require('body-parser');
const cors= require('cors');

const app = express();
app.use(bodyParser.json()) // Make sure it comes back as json

mongoose.connect('mongodb+srv://vatsal1234:vatsal1234@cluster0-068d8.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(cors());
app.use(foodRouter);

app.listen(3000, () => { console.log('Server is running...') });