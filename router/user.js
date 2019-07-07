const router = require('express').Router(),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    bcryptjs = require('bcryptjs');

//modal
const User = require('../model/user');
//validator
const validateRegisterInput = require('../validator/register'),
    validateLoginInput = require('../validator/login');
//key
const key = require('../config/key');
// @route	Post /register
// @desc	Register the new user
// @access	Public
router.post('/register', async (req, res) => {
    try {
        let { err, isValid } = await validateRegisterInput(req.body);
        if (!isValid) return res.status(400).json(err);
        let { name, password, email, age, occupation } = req.body,
            user = await User.findOne({ email: email });
        if (user) { err.email = "Account already exists !!"; return res.status(400).json(err) };
        let salt = await bcryptjs.genSalt(10),
            hash = await bcryptjs.hash(password, salt);
        password = hash;
        let newUser = await User.create({ name, password, email, age, occupation });
        res.json(newUser);
    }
    catch (e) { res.json(e); }
});
// @route	Post /login
// @desc	Register the new user
// @access	Public
router.post('/login', async (req, res) => {
    try {
        let { err, isValid } = await validateLoginInput(req.body);
        if (!isValid) return res.status(400).json(err);
        let { email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (!user) return res.status(404).json("User Does not Exists");
        let isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) res.status(400).json({ result: "Password does not match " });
        let token = jwt.sign({ id: user.id, email: user.email, password: user.password }, key.secretKey);
        res.json({ success: true, token: "Bearer " + token });
    }
    catch (e) { res.status(404).json(e); }
});

// @route	Get /info
// @desc    info about the loggefd in user
// @access	Private
router.get('/info', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(req.user);
});


module.exports = router;