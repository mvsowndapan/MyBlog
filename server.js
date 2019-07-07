const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    app = express();

const router = require('./router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

const port = process.env.PORT || 5000,
    db = require('./config/key').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected successfully"))
    .catch((e) => console.log('Database not connected successfully'));

app.listen(port, () => console.log(`Server on :${port}`));

app.use('/', router);

