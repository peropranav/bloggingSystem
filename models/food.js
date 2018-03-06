var mongoose = require('mongoose');
const Schema=mongoose.Schema;
var foodBlog = new Schema({

    title:
        {
            type:String
        },
    content:
        {
            type:String
        },
    writtenBy:
        {
            type:String
        },
    id:
        {

        },
    likes:
        {
            type:Number
        }






})

module.exports=mongoose.model('foodBlog', foodBlog);
