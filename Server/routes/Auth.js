const passport = require('passport0');
const { router } = require('../app');

/*POST METHOD FOR REGISTRATION */
//INVOKE THE user model which extends the passport-local-mongoos
//create a new user in the DB
//Password pass a separate parameter for hashing

router.post('/register',(req,res,next) => {
    user.register(new User({
         username: req.body.username
    }),
    req.body.password,(err,newUswe) =>
    {
       if(err)
       {
           return res.redirect('/register')
       }
       else
       {
           req.login(newUser, (err)=>{
               res.redirect('/index')
           })
       }
 
    }
    )
})

/*Post /login method */
//user passport to authenticate the login attempt

router.post('/login',passport.authenticate('local',{
      successRedirect: '/Ecentennial/courses',
      failureRedirect: '/login',
      failureMessage: 'Invalid Login'

}))