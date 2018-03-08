var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');
var passport=require('passport')
var flash = require('connect-flash');


const port=process.env.PORT || 3000;
var session = require('express-session');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bloggingSystem');



//express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));




// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


//adding static path
app.use(express.static('public'))



//setting middleware for bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setting view engine
app.set('view engine', 'ejs');


//init the passport
app.use(passport.initialize());
app.use(passport.session());


var general=require('./routes/general.js');
var mba=require('./routes/mba.js');
var food=require('./routes/food.js');
var btech=require('./routes/btech.js');
var auth=require('./routes/auth.js')

var addBlog=require('./routes/blog.js');

app.set('views', path.join(__dirname, 'views'));
app.use('/general',general);
app.use('/mba',mba);
app.use('/btech',btech);
app.use('/food',food);
app.use('/',auth);
app.use('/addBlog',addBlog);

app.get('/',function (req,res) {
    res.redirect('/general')

})


app.listen(port,function () {
    console.log("listening at port 3000")
});


