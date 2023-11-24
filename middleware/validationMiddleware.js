module.exports=(req,res,next)=>{
    if(req.body.FirstName == null || req.body.LastName == null || req.body.LicenseNumber == null || req.body.Age == null){
    return res.redirect('/g2?message=Mandatory%20Field')
        }
        
    next()
}
