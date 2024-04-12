const express = require('express');
const router = express.Router();

const userController = require('../Controller/user_controller');

const passport = require('passport');
require("../Config/passport")(passport);

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/verify', passport.authenticate('jwt', { session: false }), userController.verify);

module.exports = router;