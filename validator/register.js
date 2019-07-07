//middleware
const Validator = require('validator');

// importing validation stuff
const isEmpty = require('./isEmpty');



module.exports = function validateRegisterInput(data) {
    let err = {};

    // validation for empty data 
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.occupation = !isEmpty(data.occupation) ? data.occupation : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confrim = !isEmpty(data.confrim) ? data.confrim : '';

    //Name Validation
    if (!Validator.isLength(data.name, { min: 2, max: 30 })) err.name = "Name must be between 2 to 30 Characters";
    if (Validator.isEmpty(data.name)) err.name = "Name Can't be empty";

    //Email validation
    if (!Validator.isEmail(data.email)) err.email = "Email is invalid";
    if (Validator.isEmpty(data.email)) err.email = "Email Can't be empty";


    //Password Validation
    if (Validator.isEmpty(data.password)) err.password = "Password Can't be empty";
    if (!Validator.isLength(data.password, { min: 8, max: 20 })) err.password = "Password must be atleast 8 Characters";

    //Password Validation
    if (Validator.isEmpty(data.occupation)) err.occupation = "Occupation Can't be empty";

    //age
    if (data.age < 10 || data.age > 99) err.age = "Age must above 10 and with in 99";

    //Confrim
    if (Validator.isEmpty(data.confrim)) err.confrim = "Confrim Password Can't be empty";
    if (!Validator.equals(data.password, data.confrim)) err.confrim = "Confrim Password doesn't match";

    return {
        err,
        isValid: isEmpty(err)
    }
}
