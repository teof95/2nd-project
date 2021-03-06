require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const keys = require('./configs/keys')
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


const app = express();

// require database configuration
require('./configs/db.config');
require('./configs/passport-setup');
// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// Include session to application
const sessionConnect = require("./configs/sessions.config");
sessionConnect(app);


// default value for title local
app.locals.title = 'Iron drugstore and information center';

const index = require('./routes/index.routes');
const authRouter = require('./routes/user.routes');
const drugsRouter = require('./routes/drugs.routes');
const profileRoutes = require('./routes/profile.routes');




app.use('/', index);
app.use('/', authRouter);
app.use('/', drugsRouter);


module.exports = app;