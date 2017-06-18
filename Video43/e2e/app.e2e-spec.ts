import { Video43Page } from './app.po';

describe('video43 App', () => {
  let page: Video43Page;

  beforeEach(() => {
    page = new Video43Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
