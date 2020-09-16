class AuthSuccessful {
    constructor(success,username) {
        this.success = success
        this.username = username
    }
}

class LoginSuccessful extends AuthSuccessful {
    constructor(success,username,token) {
        super(success,username);
        this.token = token
    }

}

function LoginSuccessfulResponse(username,token) {
    return new LoginSuccessful(true,username,token)
}

function RegisterSuccessfulResponse(username) {
    return new AuthSuccessful(true,username);
}

export {
    LoginSuccessfulResponse,
    RegisterSuccessfulResponse
}
