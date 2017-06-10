import { DatabindingPage } from './app.po';

describe('databinding App', () => {
  let page: DatabindingPage;

  beforeEach(() => {
    page = new DatabindingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
