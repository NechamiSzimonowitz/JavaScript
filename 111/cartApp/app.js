var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/stylesheets', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/:id/:num', (res, req, next) => {
  const itemId = req.params.id;
  if (!req.session.id) {
    req.session.id = [{ itemId, num }];
  }
  else {
    req.session.id.push({ itemId, num });
  }

  res.redirect('/');

  next();
});

app.use('/showCart', (res, req, next) => {
  req.session.id.forEach(id => {
    res.message(id);
  });

})





// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', {
    partials: {
      content: 'error'
    }
  });
});

app.locals.appTitle = 'PCS Music Store';

module.exports = app;