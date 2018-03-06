const  router=require('express').Router();
var path = require('path');

var btechBlog=require('../models/btech.js')
var mbaBlog=require('../models/mba.js')
var foodBlog=require('../models/food.js')
var generalBlog=require('../models/general.js')

const publicPath = path.join(__dirname, '../public');

router.get('/',function (req,res) {


    res.sendFile( publicPath + '/html/addBlog.html')
})



router.post('/', function (req,res) {

    //console.log(req.body);
//conditon to save to which collection

    if(req.body.genre==='MBA')
    {
      //  console.log("mba")

        var newMbaBlog= new mbaBlog({

            title: req.body.title,
            content: req.body.content,
            writtenBy:req.body.writtenBy,
            genre: req.body.genre


        })

        newMbaBlog.save(function (error)  {

            console.log("Your blog has been saved!");
            if (error) {
                console.error(error);
            }
        });


        res.redirect('/addBlog')





    }

    if(req.body.genre==='B.Tech')
    {
       // console.log("B.Tech")

var newBtechBlog= new btechBlog({

    title: req.body.title,
    content: req.body.content,
    writtenBy:req.body.writtenBy,
    genre: req.body.genre


})

    newBtechBlog.save(function (error)  {

            console.log("Your blog has been saved!");
         if (error) {
            console.error(error);
        }
        });


    res.redirect('/addBlog')



    }


    if(req.body.genre==='General')
    {
       // console.log("general")

        var newGeneralBlog= new generalBlog({

            title: req.body.title,
            content: req.body.content,
            writtenBy:req.body.writtenBy,
            genre: req.body.genre,



        })

        newGeneralBlog.save(function (error)  {

            console.log("Your blog has been saved!");
            if (error) {
                console.error(error);
            }
        });


        res.redirect('/addBlog')




    }


    if(req.body.genre==='Food')
    {
        //console.log("food")

        var newFoodBlog= new foodBlog({

            title: req.body.title,
            content: req.body.content,
            writtenBy:req.body.writtenBy,
            genre: req.body.genre


        })

        newFoodBlog.save(function (error)  {

            console.log("Your blog has been saved!");
            if (error) {
                console.error(error);
            }
        });


        res.redirect('/addBlog')





    }



 })





module.exports=router;