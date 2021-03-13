class DownloadPage{
  private url: string
  private dataTextArea: string
  private generateFileBtn: string
  private downloadLink: string

  constructor(){
    this.url = 'http://demo.automationtesting.in/FileDownload.html'
    this.dataTextArea = '#textbox'
    this.generateFileBtn = '#createTxt'
    this.downloadLink = '#link-to-download'
  }

  visit(){
    cy.visit(this.url)
  }

  fillData(text: string){
    cy.get(this.dataTextArea).type(text)
  }

  downloadFile(){
    cy.get(this.generateFileBtn).click()
      .get(this.downloadLink).click()
  }
}

export {DownloadPage}
