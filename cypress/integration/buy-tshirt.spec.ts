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

<<<<<<< HEAD
describe('Buy a t-shirt', () => {
=======
describe('The user navigates to the Shopping page', () => {
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326

  before(() => {
    menuContentPage = new MenuContentPage()
    productListPage = new ProductListPage()
    loginPage = new LoginPage()
    shoppingCartPage = new ShoppingCartPage()
    addressStepPage = new AddressStepPage()
    shippingStepPage = new ShippingStepPage()
    paymentStepPage = new PaymentStepPage();
<<<<<<< HEAD
  })

  it('then should be bought a t-shirt', () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()
    productListPage.AddTShirtToCart('Faded Short Sleeve T-shirts')
    productListPage.proceedToCheckout()

    shoppingCartPage.clickProceedToCheckout()

    loginPage.login(userEmail, userPassword)

    addressStepPage.clickAddressProceedToCheckout()

    shippingStepPage.checkTermsOfService()
    shippingStepPage.clickShippingProceedToCheckout()

=======

    menuContentPage.visitMenuContentPage()
  })

  it('Then completes the shopping process and verifies the confirmation order message', () => {

    menuContentPage.goToTShirtMenu()
    productListPage.addTShirtToCart()
    productListPage.proceedToCheckout()
    shoppingCartPage.clickProceedToCheckout()
    loginPage.login(userEmail, userPassword)
    addressStepPage.clickAddressProceedToCheckout()
    shippingStepPage.checkTermsOfService()
    shippingStepPage.clickShippingProceedToCheckout()
>>>>>>> a150621f87454d9227bcde59f15aadc54fc31326
    paymentStepPage.clickPayByBankWire()
    paymentStepPage.clickConfirmOrder()

    shoppingCartPage.validateConfirmOrderMessage(confirmOrderMessage)
  });
});
