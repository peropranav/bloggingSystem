var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');
const port=process.env.PORT || 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bloggingSystem');
app.use(express.static('public'))
//setting middleware for bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

var main=require('./routes/main.js');
var addBlog=require('./routes/blog.js');

app.set('views', path.join(__dirname, 'views'));
app.use('/',main);
app.use('/addBlog',addBlog);




app.listen(port,function () {
    console.log("listening at port 3000")
});


