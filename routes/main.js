const  router=require('express').Router();

router.get('/',function (req,res) {



    res.render('main.ejs',{


     generalBlog:   [

            {



            },

            {

            }


        ]

    })
})

module.exports=router