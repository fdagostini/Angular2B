import { Video25Page } from './app.po';

describe('video25 App', () => {
  let page: Video25Page;

  beforeEach(() => {
    page = new Video25Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
