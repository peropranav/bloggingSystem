var mongoose = require('mongoose');
const Schema=mongoose.Schema;
var btechBlog = new Schema({

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
    likes:
        {
            type:Number
        }






})

module.exports=mongoose.model('btechBlog', btechBlog);
