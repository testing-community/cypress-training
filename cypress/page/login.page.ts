class LoginPage {
    private emailField: string
    private passwordField: string
    private submitLoginButton: string

    constructor() {
        this.emailField = '#email'
        this.passwordField = '#passwd'
        this.submitLoginButton = '#SubmitLogin'
    }

    public login(email: string, password: string){
      cy.get(this.emailField).type(email)
        .get(this.passwordField).type(password)
        .get(this.submitLoginButton).click()
    }
}

export { LoginPage }
