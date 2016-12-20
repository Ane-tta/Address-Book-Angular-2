import { AddressBookCliPage } from './app.po';

describe('address-book-cli App', function() {
  let page: AddressBookCliPage;

  beforeEach(() => {
    page = new AddressBookCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
