class LoginAuth {
    constructor(username,password) {
        this.username = username
        this.password = password
    }
}

class RegisterAuth extends LoginAuth {
    constructor(username,password,email,gender) {
        super(username,password);
        this.email = email
        this.gender = gender
    }
}

function LoginRequest(username,password) {
    return new LoginAuth(username,password)
}

function RegisterRequest(username,password,email,gender) {
    return new RegisterAuth(username,password,email,gender)
}

export {
    LoginRequest,
    RegisterRequest
}
