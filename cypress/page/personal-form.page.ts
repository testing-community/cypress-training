export enum Hobbies {
  Sports = 1,
  Reading = 2,
  Music = 3
}

export enum ModalSubmitTable {
  Name = 0,
  Email = 1,
  Gender = 2,
  Mobile = 3,
  Date = 4,
  Hobbies = 6,
  Address = 8,
  State = 9,
}

interface FillFormParam {
  name: string,
  lastName: string,
  email: string,
  gender: string,
  mobileNumber: string,
  currentAddress: string,
  hobbies: Hobbies[],
  location: {state: string, city: string}
}

class PersonalFormPage {
  private url: string
  private nameText: string
  private lastNameText: string
  private emailText: string
  private mobileNumberText: string
  private hobbiesCheck: string
  private genderRadioBtn: string
  private currentTextArea: string
  private stateSelect: string
  private citySelect: string
  private submitBtn: string
  private tableValuesText: string

  constructor(){
    this.url = 'https://demoqa.com/automation-practice-form'
    this.nameText = '#firstName'
    this.lastNameText = '#lastName'
    this.emailText = '#userEmail'
    this.mobileNumberText = '#userNumber'
    this.genderRadioBtn = '#genterWrapper input'
    this.hobbiesCheck = '#hobbiesWrapper input'
    this.currentTextArea = '#currentAddress'
    this.stateSelect = '#state'
    this.citySelect = '#city'
    this.submitBtn = '#submit'
    this.tableValuesText = '.modal-body tbody td:last-child'
  }

  visit(){
    cy.visit(this.url)
  }

  fillForm({
    name,
    lastName,
    email,
    gender,
    mobileNumber,
    currentAddress,
    hobbies,
    location
    }: FillFormParam){
      cy.get(this.nameText).type(name)
        .get(this.lastNameText).type(lastName)
        .get(this.emailText).type(email)
        .get(this.mobileNumberText).type(mobileNumber)
        .get(this.genderRadioBtn).filter(`[value="${gender}"]`).check({force: true})
        .get(this.currentTextArea).type(currentAddress)
        for(const hobby of hobbies){
          cy.get(this.hobbiesCheck).filter(`[value="${hobby}"]`).check({force: true})
        }
        this.selectItem(this.stateSelect, location.state)
        this.selectItem(this.citySelect, location.city)
      cy.get(this.submitBtn).click()
  }

  getModalTableValue(index: number){
    return cy.get(this.tableValuesText)
      .its(index)
  }

  private selectItem(selector: string, option: string){
    cy.get(`${selector} svg`).click({force: true})
      .then(() => {
        cy.get(`${selector} [tabindex="-1"]`).contains(option).click({force: true})
      })
  }
}

export {PersonalFormPage}
