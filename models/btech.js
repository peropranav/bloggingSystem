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
    id:
        {

        },
    likes:
        {
            type:Number
        }






})

module.exports=mongoose.model('btechBlog', btechBlog);
