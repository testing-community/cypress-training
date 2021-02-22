class AddressStepPage {
  private addressProceedToCheckoutButton: string

  constructor(){
<<<<<<< HEAD
    this.addressProceedToCheckoutButton = '[name="processAddress"]'
=======
    this.addressProceedToCheckoutButton = '#center_column > form > p > button > span'
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326
  }

  public clickAddressProceedToCheckout(): void {
    cy.get(this.addressProceedToCheckoutButton).click()
  }
}

export {AddressStepPage}
