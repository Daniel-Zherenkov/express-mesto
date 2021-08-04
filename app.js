const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '610a6f0165ef9d580c5ccd22',
  };

  next();
});

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// app.get('/test/:id', (req, res) => {
//   res.send(
//         req.params.id
//     );
// });

// Слушаем 3000 порт

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
