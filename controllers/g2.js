const User = require('../models/User')
module.exports = async (req, res) => {
    const user = await User.findById(req.session.userId);
    //res.sendFile(path.resolve(__dirname,'public/g1.html'))
    res.render('g2_page', { req, user });

}