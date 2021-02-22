class PaymentStepPage{
  private payByBankWireButton: string
  private confirmOrderButton: string

  constructor(){
<<<<<<< HEAD
    this.payByBankWireButton = '.bankwire'
    this.confirmOrderButton = '#cart_navigation span'
=======
    this.payByBankWireButton = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a'
    this.confirmOrderButton = '#cart_navigation > button > span'
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326
  }

  public clickPayByBankWire(): void {
    cy.get(this.payByBankWireButton).click()
  }

  public clickConfirmOrder(): void {
    cy.get(this.confirmOrderButton).click()
  }
}

export {PaymentStepPage}
