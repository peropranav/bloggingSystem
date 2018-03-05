const  router=require('express').Router();
var btechDoc=require('../models/btech')
router.get('/',function (req,res) {

    btechDoc.find({},function (err,result) {

        if(err)
        {
            console.log("Some fucking error occured")
        }
        else
        {
            res.render('btech.ejs',{result:result}) }

    })

})





module.exports=router;