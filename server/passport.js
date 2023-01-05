
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;


passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new GoogleStrategy({
    clientID:"385911083467-d585clohrevrrp9ebinp4q5gok78s09v.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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" , // Your Credentials here.
    callbackURL:"http://localhost:4000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));