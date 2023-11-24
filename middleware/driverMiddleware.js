module.exports=(req, res, next) => {
    if (!req.session.userId || (req.session.userId && req.session.userType !== 'Driver')) {
        res.redirect('/')
        return;
    }
    next()
}
