const User = require('../models/User')
const bcrypt = require('bcrypt')
module.exports = async(req, res) => {
    try{
        const {Username , Password} = req.body
        const user  = await User.findOne({Username});
        if(user){
            bcrypt.compare(Password , user.Password , (error,same) =>{
                console.log(Password)
                console.log(user)
                if(same){
                   
                    req.session.userId = user._id
                    req.session.userType = user.UserType
                    res.redirect('/')
                    console.log("SAME")
                }
                else{
                    res.redirect('/login')
                    console.log("NOT SAME")
                }
            })
        }
      
    }
    catch(error){
        console.log(error + "ERROR")
    }
}
