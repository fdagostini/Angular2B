import { MeuPrimeiroProjetoPage } from './app.po';

describe('meu-primeiro-projeto App', () => {
  let page: MeuPrimeiroProjetoPage;

  beforeEach(() => {
    page = new MeuPrimeiroProjetoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
