const  router=require('express').Router();
var generalDoc=require('../models/general')


var i;
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        i=0;
next();

    }



    //not logged in

    else {

        i=10;
        console.log("not logged in");
        next();

    }


}

router.get('/',ensureAuthenticated,function (req,res) {


    generalDoc.find({},function (err,result) {

        if(err)
        {
            console.log("Some fucking error occured")
        }
        else
        {
            if(i==10)  //not logged in
            {
                result.checker="notlogIn"

                res.render('general.ejs',{result:result})

            }

            if(i==0)   //logged in
            {
                result.checker="logIn"
                res.render('general.ejs',{result:result})

            }

        }

    })
})

router.get('/:id',function (req,res) {

    console.log(req.params.id)
    generalDoc.findById({_id: req.params.id}, function (err, result) {
        if (err) {
            console.log("Some fucking error occured" + err)
        }
        else {
            console.log(result)
            res.render('generalFull.ejs', {result: result})
        }


    })
})





module.exports=router;