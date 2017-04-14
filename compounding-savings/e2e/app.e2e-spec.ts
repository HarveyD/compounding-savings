import { CompoundingSavingsPage } from './app.po';

describe('compounding-savings App', () => {
  let page: CompoundingSavingsPage;

  beforeEach(() => {
    page = new CompoundingSavingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
