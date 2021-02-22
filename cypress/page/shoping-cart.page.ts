class ShoppingCartPage {
  private proceedCheckout: string
  private confirmOrderMessage: string

  constructor() {
    this.proceedCheckout = '.cart_navigation span'
<<<<<<< HEAD
    this.confirmOrderMessage = '#center_column .cheque-indent strong'
=======
    this.confirmOrderMessage = '#center_column > div > p > strong'
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326
  }

  public clickProceedToCheckout(): void {
    cy.get(this.proceedCheckout).click()
  }

  public validateConfirmOrderMessage(message: string): void {
    cy.get(this.confirmOrderMessage).should('have.text', message)
  }
}

export { ShoppingCartPage }
