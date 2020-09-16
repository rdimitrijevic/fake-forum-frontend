import {AuthFailedResponse} from '@/models/responses/auth/AuthFailedResponse'
/**
 *
 * @param {string} password - Password value to be validated
 * @returns {Promise<boolean>} True if password is successfully validated, false otherwise
 * @description Validates value that is passed in through the password parameter
 */
async function password_val(password) {
    if (typeof password !== 'string') {
        throw Error('Invalid password data type');
    }

    if (password.length < 8)
        throw Error('Password too short');

    return true;
}

/**
 *
 * @param {string} username - Username value to be validated
 * @returns {Promise<boolean>} True if username is successfully validated, false otherwise
 * @description Validates usrename that is passed in through the username parameter
 */
async function username_val(username) {
    let re = /^\d+$/gm;

    if (typeof username !== 'string') {
        throw Error('Invalid username data type');
    }

    if (re.test(username.trim().replace(" ", ""))) {
        throw Error('Invalid username format');
    }

    if (username.length < 6)
        throw Error('Username too short');

    return true;
}

/**
 *
 * @param {string} email - Email value to be validated
 * @returns {Promise<boolean>} True if email is successfully validated, false otherwise
 * @description Validates value that is passed in through the email parameter
 */
async function email_val(email) {
    let re = /\S+@\S+\.\S+/;

    if (typeof email !== 'string')
        throw Error('Invalid email data type');

    if (!re.test(email))
        throw Error('Invalid email format');

    if (email.length < 6)
        throw Error('Email too short');

    return true;
}


/**
 *
 * @param {string} gender - Gender value to be validated
 * @returns {Promise<boolean>} True if gender is successfully validated, false otherwise
 * @description Validates value that is passed in through the gender parameter
 */
async function gender_val(gender) {
    if (typeof gender !== 'string')
        throw Error('Invalid gender data type');

    if (gender.toLowerCase() !== 'male'
        && gender.toLowerCase() !== 'female')
        throw Error('Invalid gender format');

    return true;
}

function register_validation(request) {
    let user_val = username_val(request.username);
    let pass_val = password_val(request.password);
    let mail_val = email_val(request.email);
    let gend_val = gender_val(request.gender);

    return Promise
        .all([
            user_val,
            pass_val,
            mail_val,
            gend_val
        ])
            .then( (_) => {
                return true;
            } )
            .catch(err => {
                return AuthFailedResponse(false,err.message);
            });

}


function login_validation(request) {
    let user_val = username_val(request.username);
    let pass_val = password_val(request.password);

    return Promise
        .all([user_val, pass_val])
        .then((_) => {
            return true
        })
        .catch(err => {
            return AuthFailedResponse(false,err.message);

        });
}


export {
    register_validation,
    login_validation
};
