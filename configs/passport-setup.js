const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/Google.model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        User.findOne({ googleID: profile.id })
            .then((currentUser) => {
                if (currentUser) {
                    // already have this user
                    console.log('user is: ', currentUser);
                    // do something
                    return done(null, currentUser);
                } else {
                    // if not, create user in our db
                    new User({
                        googleID: profile.id,
                        username: profile.displayName
                    }).save().then((newUser) => {
                        console.log('created new user: ', newUser);
                        // do something
                    });
                }
            });
    })
);