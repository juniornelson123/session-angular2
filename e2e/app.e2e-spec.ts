import { NtaskAngular2Page } from './app.po';

describe('ntask-angular2 App', () => {
  let page: NtaskAngular2Page;

  beforeEach(() => {
    page = new NtaskAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
