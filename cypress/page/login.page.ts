class LoginPage {
    private emailField: string
    private passwordField: string
    private submitLoginButton: string

    constructor() {
        this.emailField = '#email'
        this.passwordField = '#passwd'
        this.submitLoginButton = '#SubmitLogin > span'
    }

    public typeEmail(email: string): void {
        cy.get(this.emailField).type(email)
    }

    public typePassword(password: string): void {
        cy.get(this.passwordField).type(password)
    }

    public submitLogin(): void {
        cy.get(this.submitLoginButton).click()
    }
}

export { LoginPage }