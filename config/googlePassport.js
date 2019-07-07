const express = require('express'),
    googleStrategy = require('passport-google-oauth20');

const opts = {};
passport.use(new googleStrategy({}), () => { });