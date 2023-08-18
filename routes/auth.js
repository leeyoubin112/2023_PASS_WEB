module.exports = {
    CheckAuth: async function(req, res, next) {
        console.log('이슈 테스트');
        if(req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}