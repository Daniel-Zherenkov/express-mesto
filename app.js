const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Слушаем 3000 порт

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

setInterval(() => console.log('aa'), 1800000);
