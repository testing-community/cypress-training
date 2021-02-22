class ShippingStepPage{
  private shippingProceedToCheckout: string
  private termsOfServiceCheckBox: string

  constructor(){
<<<<<<< HEAD
    this.shippingProceedToCheckout = '[name="processCarrier"]'
=======
    this.shippingProceedToCheckout = '#form > p > button > span'
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326
    this.termsOfServiceCheckBox = '#cgv'
  }

  public clickShippingProceedToCheckout(): void {
    cy.get(this.shippingProceedToCheckout).click()
  }

  public checkTermsOfService(): void {
    cy.get(this.termsOfServiceCheckBox).click()
  }
}

export {ShippingStepPage}
