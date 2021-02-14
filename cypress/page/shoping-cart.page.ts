class ShoppingCartPage {
    private proceedCheckout: string
    private addressProceedToCheckoutButton: string
    private termsOfServiceCheckBox: string
    private shippingProceedToCheckout: string
    private payByBankWireButton: string
    private confirmOrderButton: string
    private confirmOrderMessage: string

    constructor() {
        this.proceedCheckout = '.cart_navigation span'
        this.addressProceedToCheckoutButton = '#center_column > form > p > button > span'
        this.termsOfServiceCheckBox = '#cgv'
        this.shippingProceedToCheckout = '#form > p > button > span'
        this.payByBankWireButton = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a'
        this.confirmOrderButton = '#cart_navigation > button > span'
        this.confirmOrderMessage = '#center_column > div > p > strong'
    }

    public clickProceedToCheckout(): void {
        cy.get(this.proceedCheckout).click()
    }

    public clickAddressProceedToCheckout(): void {
        cy.get(this.addressProceedToCheckoutButton).click()
    }

    public checkTermsOfService(): void {
        cy.get(this.termsOfServiceCheckBox).click()
    }

    public clickShippingProceedToCheckout(): void {
        cy.get(this.shippingProceedToCheckout).click()
    }

    public clickPayByBankWire(): void {
        cy.get(this.payByBankWireButton).click()
    }

    public clickConfirmOrder(): void {
        cy.get(this.confirmOrderButton).click()
    }

    public validateConfirmOrderMessage(message: string): void {
        cy.get(this.confirmOrderMessage).should('have.text', message)
    }
}

export { ShoppingCartPage }
