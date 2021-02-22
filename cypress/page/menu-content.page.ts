class MenuContentPage {
  private tShirtMenu: string;
  private dressesMenu: string;
  private menuContentPageURL: string

  constructor() {
<<<<<<< HEAD
      this.tShirtMenu = '#block_top_menu > ul > li > a[title="T-shirts"]';
      this.dressesMenu = '#block_top_menu > ul > li > a[title="Dresses"]'
=======
      this.tShirtMenu = '#block_top_menu > ul > li:nth-child(3) > a';
      this.dressesMenu = '#block_top_menu > ul > li:nth-child(2) > a'
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326
      this.menuContentPageURL = 'http://automationpractice.com/'
  }

  public visitMenuContentPage(): void {
      cy.visit(this.menuContentPageURL)
  }

  public goToTShirtMenu(): void {
      cy.get(this.tShirtMenu).click()
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click()
  }
}

export { MenuContentPage }
