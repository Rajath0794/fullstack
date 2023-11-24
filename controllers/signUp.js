const User = require('../models/User');

module.exports = async (req, res) => {
        console.log(req.body);
        const user = await User.create({
            ...req.body,
        });
        console.log(user);
        let redirectUrl = '/login';
        res.redirect(redirectUrl);
    }