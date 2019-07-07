//middleware
const Validator = require('validator');

// importing validation stuff
const isEmpty = require('./isEmpty');



module.exports = function validateLoginInput(data) {
    let err = {};
    // validation for empty data 
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    //Email validation
    if (!Validator.isEmail(data.email)) err.email = "Email is invalid";
    if (Validator.isEmpty(data.email)) err.email = "Email Can't be empty";

    //Password Validation
    if (Validator.isEmpty(data.password)) err.password = "Password Can't be empty";
    if (!Validator.isLength(data.password, { min: 8, max: 20 })) err.password = "Password must be atleast 8 Characters";

    return {
        err,
        isValid: isEmpty(err)
    }
}
