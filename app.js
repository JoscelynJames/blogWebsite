const express = require('express');
const app = express();
const port = process.env.PORT || 3210;
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

const strategy = new Auth0Strategy(
  {
    domain: 'joscelyn-james.auth0.com',
    clientID: 'p9Ckvwt-zR0jR-oU73QZl-uoxycmGDIR',
    clientSecret: 'dr3-wfjRBTEuoR97i0p03bgh2lo73kwFwohPtwDE1YSG-arZ88eBPodOWZLvyG6M',
    callbackURL: '${herokuURL}/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
  console.log('Listening on port ' + port);
})

module.exports = app;
