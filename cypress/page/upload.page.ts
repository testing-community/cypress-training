class UploadPage{
  private url: string
  private uploadInput: string
  private uploadedFileTitle: string

  constructor(){
    this.url = 'http://demo.automationtesting.in/FileUpload.html'
    this.uploadInput = '#input-4'
    this.uploadedFileTitle = '.file-preview-frame.kv-preview-thumb .file-footer-caption'
  }

  visit(){
    cy.visit(this.url)
  }

  uploadFile(path: string){
    cy.get(this.uploadInput).attachFile(path)
  }

  getFileTitle(){
    return cy.get(this.uploadedFileTitle)
  }
}

export {UploadPage}
