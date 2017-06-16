import { Video17Page } from './app.po';

describe('video17 App', () => {
  let page: Video17Page;

  beforeEach(() => {
    page = new Video17Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
