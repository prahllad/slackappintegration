import { SlackappPage } from './app.po';

describe('slackapp App', () => {
  let page: SlackappPage;

  beforeEach(() => {
    page = new SlackappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
