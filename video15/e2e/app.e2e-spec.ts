import { Video15Page } from './app.po';

describe('video15 App', () => {
  let page: Video15Page;

  beforeEach(() => {
    page = new Video15Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
