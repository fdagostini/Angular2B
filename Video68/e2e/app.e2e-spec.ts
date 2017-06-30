import { Video50Page } from './app.po';

describe('video50 App', () => {
  let page: Video50Page;

  beforeEach(() => {
    page = new Video50Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
