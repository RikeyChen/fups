const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require("./routes/api/users");
const fups = require("./routes/api/fups");
const words = require('./routes/api/words');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('This is working'));
app.use('/api/users', users);
app.use('/api/fups', fups);
app.use('/api/words', words);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
