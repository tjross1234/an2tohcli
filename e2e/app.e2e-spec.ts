import { TohcliPage } from './app.po';

describe('tohcli App', function() {
  let page: TohcliPage;

  beforeEach(() => {
    page = new TohcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
