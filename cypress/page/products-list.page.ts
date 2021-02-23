class ProductListPage {
  private addToCartButton: string
  private proceedToCheckoutButton: string
  private productCard: string

  constructor() {
    this.addToCartButton = 'a.button.ajax_add_to_cart_button.btn.btn-default'
    this.proceedToCheckoutButton = '[style*="display: block;"] .button-container > a'
    this.productCard = 'ul.product_list li'
  }

  private findProductByName(productName: string){
    return cy.get(this.productCard).filter(`:contains(${productName})`)
  }

  public proceedToCheckout(): void {
    cy.get(this.proceedToCheckoutButton).click()
  }

  public AddTShirtToCart(productName: string): void {
    this.findProductByName(productName).find(this.addToCartButton).click()
  }
}

export { ProductListPage }
