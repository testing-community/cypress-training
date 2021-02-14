class ProductListPage {
    private addToCartButton: string
    private proceedToCheckoutButton: string

    constructor() {
        this.addToCartButton = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
        this.proceedToCheckoutButton = '[style*="display: block;"] .button-container > a'
    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartButton).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceedToCheckoutButton).click()
    }
}

export { ProductListPage }
