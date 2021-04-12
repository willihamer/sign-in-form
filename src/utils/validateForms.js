import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';

/**
 * This function validates if an email is valid or not
 * email: this parameter represents the email string
 */
export const validateEmail = (email) => {
    let emailValid = email;
    emailValid.trim();
    return isEmail(emailValid);
}


/**
 * This function validates if a password accomplish with:
 *  - min length 8
 *  - at least 1 lowercase
 *  - at least 1 uppercase
 *  - at least 1 number
 * email: this parameter represents the email string
 */
export const validatePassword = (password) => {
    let options = { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false }
    return isStrongPassword(password, options);
}