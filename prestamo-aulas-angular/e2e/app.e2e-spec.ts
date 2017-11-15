import { PrestamoAulasAngularPage } from './app.po';

describe('prestamo-aulas-angular App', function() {
  let page: PrestamoAulasAngularPage;

  beforeEach(() => {
    page = new PrestamoAulasAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
