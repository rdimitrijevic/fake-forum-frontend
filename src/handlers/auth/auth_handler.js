import Vue from 'vue';
import axios from 'axios'
import {LoginSuccessfulResponse,RegisterSuccessfulResponse} from '@/models/responses/auth/AuthSuccessfulResponse'
import {AuthFailedResponse} from '@/models/responses/auth/AuthFailedResponse'

import {login_validation,register_validation} from '@/validation/auth_validatiors'

async function login_handler(credentials){
    try {
        let validation = await login_validation(credentials);

        if (validation !== true) return validation;

        let res = await axios
            .post(
                'http://localhost:8000/users/login',
                credentials);

        if (res.status === 200) {
            Vue.cookie.set(
                'user-token',
                res.data.token,
                { expiresIn: res.data.expiresIn });

            return LoginSuccessfulResponse(res.data.username,res.data.token);
        }

        return AuthFailedResponse(false,res.statusText);
    } catch (e) {
        return AuthFailedResponse(false,e.message);
    }
}

async function register_handler(credentials){
    try {
        let validation = await register_validation(credentials);

        if ( validation !== true) return validation;

        let res = await axios
            .post(
                'http://localhost:8000/users/register',
                credentials);

        if (res.status === 201) {
            return RegisterSuccessfulResponse(res.data.username);
        }
    } catch (e) {
        if (e.response.status === 409) {
            return AuthFailedResponse(false,'Username or email unavailable');
        }

        return AuthFailedResponse(false,e.message);
    }
}

export {
    login_handler,
    register_handler
}
