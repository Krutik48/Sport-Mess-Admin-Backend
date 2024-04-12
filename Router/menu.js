const express = require('express');
const router = express.Router();
const passport = require('passport');
require("../Config/passport")(passport);

const menuController = require('../Controller/menu_controller');

router.get('/getAllMenu', menuController.getAllMenu);
router.post('/addMenu', passport.authenticate('jwt', { session: false }), menuController.addMenu);
router.delete('/deleteMenu', passport.authenticate('jwt', { session: false }), menuController.deleteMenu);
router.put('/updateMenu/:id',  passport.authenticate('jwt', { session: false }), menuController.updateMenu);
module.exports = router;