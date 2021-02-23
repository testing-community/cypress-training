class ShoppingCartPage {
  private proceedCheckout: string
  private confirmOrderMessage: string

  constructor() {
    this.proceedCheckout = '.cart_navigation span'
    this.confirmOrderMessage = '#center_column .cheque-indent strong'
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedCheckout).click()
  }

  public validateConfirmOrderMessage(message: string): void {
    cy.get(this.confirmOrderMessage).should('have.text', message)
  }
}

export { ShoppingCartPage }
