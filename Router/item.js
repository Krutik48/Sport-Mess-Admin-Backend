const express = require('express');
const router = express.Router();
const passport = require("passport");
require("../Config/passport")(passport);

const itemController = require('../Controller/item_controller');

router.get('/getAllItem', itemController.getAllItems);
router.post('/addItem', passport.authenticate('jwt', { session: false }), itemController.addItem);
router.delete('/deleteItem/:id', passport.authenticate('jwt', { session: false }), itemController.deleteItem);
router.put('/updateItem/:id', passport.authenticate('jwt', { session: false }), itemController.updateItem);

module.exports = router;