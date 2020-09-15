import Vue from 'vue';
import axios from 'axios'

class AuthResponse {
    constructor(success,username) {
        this.success = success;
        this.username = username;
    }
}

async function login_handler(credentials){
    try {
        let res = await axios
            .post(
                'http://localhost:8000/users/login',
                credentials);

        if (res.status === 200) {
            Vue.cookie.set(
                'user-token',
                res.data.token,
                { expiresIn: res.data.expiresIn });

            return new AuthResponse(true,res.data.username);
        }
    } catch (e) {
        console.log(e);
    }

    return new AuthResponse(false,'');
}

async function register_handler(credentials){
    try {
        let res = await axios
            .post(
                'http://localhost:8000/users/register',
                credentials);

        if (res.status === 201) {
            return new AuthResponse(true,'');
        }
    } catch (e) {
        console.log(e);
    }

    return new AuthResponse(false,'');
}

export {
    login_handler,
    register_handler
}
