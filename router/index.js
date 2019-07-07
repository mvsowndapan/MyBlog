const router = require('express').Router();
//routers
const User = require('./user');

router.use('/user', User);
module.exports = router;