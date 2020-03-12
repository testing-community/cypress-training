import { MenuContentPage, ProductListPage, LoginPage, ShoppingCartPage } from '../page/index'

const menuContentPage = new MenuContentPage()
const productListPage = new ProductListPage()
const loginPage = new LoginPage()
const shoppingCartPage = new ShoppingCartPage()

const userEmail = 'aperdomobo@gmail.com'
const userPassword = 'WorkshopProtractor'
const confirmOrderMessage = 'Your order on My Store is complete.'

describe('Buy a t-shirt', () => {

  it('then should be bought a t-shirt', () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    productListPage.addTShirtToCart()
    productListPage.proceedToCheckout()

    shoppingCartPage.clickProceedToCheckout()

    loginPage.typeEmail(userEmail)
    loginPage.typePassword(userPassword)
    loginPage.submitLogin()

    shoppingCartPage.clickAddressProceedToCheckout()

    shoppingCartPage.checkTermsOfService()

    shoppingCartPage.clickShippingProceedToCheckout()
    shoppingCartPage.clickPayByBankWire()
    shoppingCartPage.clickConfirmOrder()

    shoppingCartPage.validateConfirmOrderMessage(confirmOrderMessage)
  });
});