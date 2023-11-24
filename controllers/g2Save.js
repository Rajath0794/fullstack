const User = require('../models/User')
module.exports = async (req, res) => {
    //res.sendFile(path.resolve(__dirname,'public/g1.html'))
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.session.userId, {
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age,
        dob: req.body.dob,
        license: req.body.license,
        car_details: {
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            pno: req.body.pno
        }

    });
    res.redirect('/g2_page?message');

}