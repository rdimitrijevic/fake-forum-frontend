class AuthFailed {
    constructor(success,reason) {
        this.success = success
        this.reason = reason
    }
}

function AuthFailedResponse(success,reason) { return new AuthFailed(success,reason) }

export { AuthFailedResponse }
