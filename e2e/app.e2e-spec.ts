import { TohclihttpPage } from './app.po';

describe('tohclihttp App', function() {
  let page: TohclihttpPage;

  beforeEach(() => {
    page = new TohclihttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
