import { AfterChatPage } from './app.po';

describe('after-chat App', () => {
  let page: AfterChatPage;

  beforeEach(() => {
    page = new AfterChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
