const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

router.get('/', auth.CheckAuth, function(req, res) {
		console.log('index page');
    res.render('index');
});

module.exports = router;