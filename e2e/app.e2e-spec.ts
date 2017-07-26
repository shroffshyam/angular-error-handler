import { AngularErrorHandlerPage } from './app.po';

describe('angular-error-handler App', () => {
  let page: AngularErrorHandlerPage;

  beforeEach(() => {
    page = new AngularErrorHandlerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
