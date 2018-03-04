var mongoose = require('mongoose');
const Schema=mongoose.Schema;
var generalBlog = new Schema({

    title:
        {
            type:String
        },
    content:
        {
type:String
        },
    likes:
        {
            type:Number
        }






})

module.exports=mongoose.model('generalBlog', generalBlog);
