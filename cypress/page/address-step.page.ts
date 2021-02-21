class AddressStepPage {
  private addressProceedToCheckoutButton: string

  constructor(){
    this.addressProceedToCheckoutButton = '#center_column > form > p > button > span'
  }

  public clickAddressProceedToCheckout(): void {
    cy.get(this.addressProceedToCheckoutButton).click()
  }
}

export {AddressStepPage}
