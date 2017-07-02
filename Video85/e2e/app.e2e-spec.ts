import { Video73Page } from './app.po';

describe('video73 App', () => {
  let page: Video73Page;

  beforeEach(() => {
    page = new Video73Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
