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


router.get('/:id',function (req,res) {

    console.log(req.params.id)
    btechDoc.findById({_id: req.params.id}, function (err, result) {
        if (err) {
            console.log("Some fucking error occured" + err)
        }
        else {
            console.log(result)
            res.render('btechFull.ejs', {result: result})
        }


    })

});




module.exports=router;