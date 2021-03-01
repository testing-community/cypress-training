///<reference types="cypress-iframe" />

class IFramePage{
  private url: string;
  private parentFrame: string;
  private cssNavBtn: string
  private cssPageUrl: string;

  constructor(){
    this.url = 'https://www.w3schools.com/html/html_iframe.asp'
    this.parentFrame = '[title="W3Schools HTML Tutorial"]'
    this.cssNavBtn = '[title="CSS Tutorial"]'
    this.cssPageUrl = 'https://www.w3schools.com/css/default.asp'
  }

  visit(){
    cy.visit(this.url)
  }

  getFrameTitle(){
    return cy.iframe(this.parentFrame).find('h1').its(0)
  }

  goToCssPageInFrame(){
    cy.iframe(this.parentFrame).find(this.cssNavBtn).click()
    cy.frameLoaded(this.parentFrame, {url: this.cssPageUrl})
  }

}

export {IFramePage}
