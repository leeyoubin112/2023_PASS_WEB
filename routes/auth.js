module.exports = {
    CheckAuth: async function(req, res, next) {
<<<<<<< HEAD
        console.log(req);
=======
        console.log('auth');
>>>>>>> af866e17f1e40c1cd7974b30195a22d3db4f5cb5
        if(req.isAuthenticated()) {
            next();
        }
        else {
            res.redirect('/user/signin');
        }
    },
}