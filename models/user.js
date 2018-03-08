var mongoose = require('mongoose');
const Schema=mongoose.Schema;
var user = new Schema({
id:
    {
        type:String
    },
    token:
        {
            type:String
        },
    email:
        {
            type:String
        },
    name:
        {
            type:String
        }




})

module.exports=mongoose.model('user', user);
