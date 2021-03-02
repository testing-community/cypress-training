import {UploadPage} from '../page'


describe('The user should', () => {
  let uploadPage: UploadPage

  before(() => {
    uploadPage = new UploadPage()
  })
  it('upload a file and show the file name', () => {
    const fileName = 'uploadFileTest.jpeg'
    uploadPage.visit()

    uploadPage.uploadFile(fileName)

    uploadPage.getFileTitle().invoke('text').should('match', new RegExp(fileName, 'gi'))
  })
})
