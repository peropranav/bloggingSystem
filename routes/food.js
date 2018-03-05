const  router=require('express').Router();
var foodDoc=require('../models/food')
router.get('/',function (req,res) {
   foodDoc.find({},function (err,result) {

        if(err)
        {
            console.log("Some fucking error occured")
        }
        else
        {
            res.render('food.ejs',{result:result}) }

    })
})





module.exports=router;