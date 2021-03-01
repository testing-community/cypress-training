import { Hobbies, ModalSubmitTable } from '../page/personal-form.page';
import {PersonalFormPage} from './../page/index'

describe('The personal information page should', () => {

  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();
  })

  it('allow to fill personal information and submit then show the filled data in the modal', () => {
    const personalInformation = {
      name: 'Holmes',
      lastName: 'Salazar',
      email: 'hibarras@email.com',
      mobileNumber: '3656589156',
      gender: 'Male',
      currentAddress: 'Av siempreViva # 123',
      hobbies: [Hobbies.Music, Hobbies.Reading],
      location: {state: 'NCR', city: 'Noida'}
    }
    personalFormPage.visit()

    personalFormPage.fillForm(personalInformation)

    personalFormPage.getModalTableValue(ModalSubmitTable.Name).should('have.text', `${personalInformation.name} ${personalInformation.lastName}`)
    personalFormPage.getModalTableValue(ModalSubmitTable.Email).should('have.text', personalInformation.email)
    personalFormPage.getModalTableValue(ModalSubmitTable.Gender).should('have.text', personalInformation.gender)
    personalFormPage.getModalTableValue(ModalSubmitTable.Mobile).should('have.text', personalInformation.mobileNumber)
    personalFormPage.getModalTableValue(ModalSubmitTable.Hobbies).should('have.text', 'Music, Reading')
    personalFormPage.getModalTableValue(ModalSubmitTable.Address).should('have.text', personalInformation.currentAddress)
    personalFormPage.getModalTableValue(ModalSubmitTable.State).should('have.text', `${personalInformation.location.state} ${personalInformation.location.city}`)
  })
})
