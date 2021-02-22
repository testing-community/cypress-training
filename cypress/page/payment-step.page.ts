class PaymentStepPage{
  private payByBankWireButton: string
  private confirmOrderButton: string

  constructor(){
    this.payByBankWireButton = '.bankwire'
    this.confirmOrderButton = '#cart_navigation span'
  }

  public clickPayByBankWire(): void {
    cy.get(this.payByBankWireButton).click()
  }

  public clickConfirmOrder(): void {
    cy.get(this.confirmOrderButton).click()
  }
}

export {PaymentStepPage}
