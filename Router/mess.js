const express = require('express');
const router = express.Router();

const passport = require('passport');
require("../Config/passport")(passport);

const messController = require('../Controller/mess_controller');

router.get('/getAllMess', messController.getAllMess);
router.post('/addMess', passport.authenticate('jwt', { session: false }), messController.addMess);
router.delete('/deleteMess/:id', passport.authenticate('jwt', { session: false }), messController.deleteMess);

module.exports = router;