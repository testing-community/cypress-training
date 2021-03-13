// @ts-check
import {UploadPage, DownloadPage} from '../page'
import {join} from 'path'


describe('The user should', () => {
  const downloadsFolder = Cypress.config('downloadsFolder')
  let uploadPage: UploadPage
  let downloadPage: DownloadPage

  before(() => {
    uploadPage = new UploadPage()
    downloadPage = new DownloadPage()
  })

  it('upload a file and show the file name', () => {
    const fileName = 'uploadFileTest.jpeg'
    uploadPage.visit()

    uploadPage.uploadFile(fileName)

    uploadPage.getFileTitle().invoke('text').should('match', new RegExp(fileName, 'gi'))
  })

  it('download a file and verify', () => {
    const fileData = 'This is the file data we want to download'

    const fileName = join(downloadsFolder, 'info.txt')
    downloadPage.visit()

    downloadPage.fillData(fileData)

    downloadPage.downloadFile()

    cy.readFile(fileName, {timeout: 15000})
      .should('eq', fileData)
  })
})
