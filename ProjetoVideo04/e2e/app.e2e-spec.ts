import { ProjetoVideoPage } from './app.po';

describe('projeto-video App', () => {
  let page: ProjetoVideoPage;

  beforeEach(() => {
    page = new ProjetoVideoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
