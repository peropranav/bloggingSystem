const  router=require('express').Router();
const mbaDoc=require('../models/mba');
router.get('/',function (req,res) {
mbaDoc.find({},function (err,result) {

    if(err)
    {
        console.log("Some fucking error occured")
    }
    else
    {
        res.render('mba.ejs',{result:result}) }

})



})





module.exports=router;