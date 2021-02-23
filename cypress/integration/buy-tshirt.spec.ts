import { MenuContentPage, ProductListPage, LoginPage, ShoppingCartPage, AddressStepPage, ShippingStepPage, PaymentStepPage } from '../page/index'

let menuContentPage: MenuContentPage
let productListPage: ProductListPage
let loginPage: LoginPage
let shoppingCartPage: ShoppingCartPage
let addressStepPage: AddressStepPage
let shippingStepPage: ShippingStepPage
let paymentStepPage: PaymentStepPage

const userEmail = 'aperdomobo@gmail.com'
const userPassword = 'WorkshopProtractor'
const confirmOrderMessage = 'Your order on My Store is complete.'

describe('The user navigates to the Shopping page', () => {

  before(() => {
    menuContentPage = new MenuContentPage()
    productListPage = new ProductListPage()
    loginPage = new LoginPage()
    shoppingCartPage = new ShoppingCartPage()
    addressStepPage = new AddressStepPage()
    shippingStepPage = new ShippingStepPage()
    paymentStepPage = new PaymentStepPage();
  })

  it('Then completes the shopping process and verifies the confirmation order message', () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    productListPage.AddTShirtToCart('Faded Short Sleeve T-shirts')
    productListPage.proceedToCheckout()

    shoppingCartPage.clickProceedToCheckout()

    loginPage.login(userEmail, userPassword)

    addressStepPage.clickAddressProceedToCheckout()

    shippingStepPage.checkTermsOfService()
    shippingStepPage.clickShippingProceedToCheckout()

    paymentStepPage.clickPayByBankWire()
    paymentStepPage.clickConfirmOrder()

    shoppingCartPage.validateConfirmOrderMessage(confirmOrderMessage)
  });
});
