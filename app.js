const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require("./routes/api/users");
const fups = require("./routes/api/fups");
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);
process.env.GOOGLE_APPLICATION_CREDENTIALS = `${path}/config/google_key.json`;

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('This is working'));
app.use('/api/users', users);
app.use('/api/fups', fups);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
