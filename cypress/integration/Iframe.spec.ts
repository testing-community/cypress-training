import {IFramePage} from '../page'

describe('The iframe should', () => {
  let iframePage: IFramePage

  before(() => {
    iframePage = new IFramePage()
  })

  it('show iframe and the page should be HTML', () => {
    iframePage.visit()

    iframePage.getFrameTitle().should('have.text', 'HTML Tutorial')
  })

  it('show iframe and allow to navigate to css page and show CSS tutorial title', () => {
    iframePage.visit()

    iframePage.goToCssPageInFrame()

    iframePage.getFrameTitle().should('have.text', 'CSS Tutorial')
  })

})
