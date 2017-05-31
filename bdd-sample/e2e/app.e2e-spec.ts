import { BddSamplePage } from './app.po';

describe('bdd-sample App', () => {
  let page: BddSamplePage;

  beforeEach(() => {
    page = new BddSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
