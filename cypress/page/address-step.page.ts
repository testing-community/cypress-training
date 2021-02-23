class AddressStepPage {
  private addressProceedToCheckoutButton: string

  constructor(){
    this.addressProceedToCheckoutButton = '[name="processAddress"]'
  }

  public clickAddressProceedToCheckout(): void {
    cy.get(this.addressProceedToCheckoutButton).click()
  }
}

export {AddressStepPage}
