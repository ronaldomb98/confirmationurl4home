import { Confirmationurl4homePage } from './app.po';

describe('confirmationurl4home App', () => {
  let page: Confirmationurl4homePage;

  beforeEach(() => {
    page = new Confirmationurl4homePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
