class ShippingStepPage{
  private shippingProceedToCheckout: string
  private termsOfServiceCheckBox: string

  constructor(){
    this.shippingProceedToCheckout = '[name="processCarrier"]'
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
