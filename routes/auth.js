const router=require('express').Router();
const passport=require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var User= require('../models/user');
var configAuth = require('../fb')

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.find({id:id}, function(err, user){
        done(err, user);
    });
});

passport.use(new FacebookStrategy({
        clientID: configAuth.appID,
        clientSecret: configAuth.appSecret,
        callbackURL: configAuth.callbackUrl,
        profileFields: configAuth.profileFields,
        enableProof: true, // For security
        passReqToCallback: true // Pass request from route
    },
    function(req,accessToken, refreshToken, profile, done) {
        process.nextTick(function(){

            User.findOne({'id': profile.id}, function(err, user){
                if(err)
                    return done(err);
                if(user)
                    return done(null, user);
                else
                    {
                        console.log("balllalllllla")
                    var newUser = new User();
                    newUser.id = profile.id;
                    newUser.token = accessToken;
                    newUser.name = profile.name.givenName + ' ' + profile.name.familyName;
                    newUser.email = profile.emails[0].value;

                    newUser.save(function(err){
                        if(err)
                            throw err;
                        return done(null, newUser);
                    })
                    console.log(profile);
                }
            });
        });
    }

));


router.get('/logout', function(req, res){
    req.logout();


    res.redirect('/general');
});


router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/general',
        failureRedirect: '/' }));






module.exports=router;
