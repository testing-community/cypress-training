class ShippingStepPage{

  private shippingProceedToCheckout: string
  private termsOfServiceCheckBox: string

  constructor(){
    this.shippingProceedToCheckout = '#form > p > button > span'
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
