import { MenuContentPage, ProductListPage, LoginPage, ShoppingCartPage } from '../page/index'

let menuContentPage: MenuContentPage
let productListPage: ProductListPage
let loginPage: LoginPage
let shoppingCartPage: ShoppingCartPage

const userEmail = 'aperdomobo@gmail.com'
const userPassword = 'WorkshopProtractor'
const confirmOrderMessage = 'Your order on My Store is complete.'

describe('Buy a t-shirt', () => {

  before(() => {
    menuContentPage = new MenuContentPage()
    productListPage = new ProductListPage()
    loginPage = new LoginPage()
    shoppingCartPage = new ShoppingCartPage()
  })

  it('then should be bought a t-shirt', () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    productListPage.addTShirtToCart()
    productListPage.proceedToCheckout()

    shoppingCartPage.clickProceedToCheckout()

    loginPage.fill(userEmail, userPassword)
    loginPage.submitLogin()

    shoppingCartPage.clickAddressProceedToCheckout()

    shoppingCartPage.checkTermsOfService()

    shoppingCartPage.clickShippingProceedToCheckout()
    shoppingCartPage.clickPayByBankWire()
    shoppingCartPage.clickConfirmOrder()

    shoppingCartPage.validateConfirmOrderMessage(confirmOrderMessage)
  });
});
