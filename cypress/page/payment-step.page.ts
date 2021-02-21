class PaymentStepPage{
  private payByBankWireButton: string
  private confirmOrderButton: string

  constructor(){
    this.payByBankWireButton = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a'
    this.confirmOrderButton = '#cart_navigation > button > span'
  }

  public clickPayByBankWire(): void {
    cy.get(this.payByBankWireButton).click()
  }

  public clickConfirmOrder(): void {
    cy.get(this.confirmOrderButton).click()
  }
}

export {PaymentStepPage}
