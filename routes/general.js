const  router=require('express').Router();
var generalDoc=require('../models/general')
router.get('/',function (req,res) {


    generalDoc.find({},function (err,result) {

        if(err)
        {
            console.log("Some fucking error occured")
        }
        else
        {
            res.render('general.ejs',{result:result}) }

    })
})





module.exports=router;