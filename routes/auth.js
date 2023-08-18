module.exports = {
    CheckAuth: async function(req, res, next) {
        console.log('브랜치 테스트');
        if(req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}