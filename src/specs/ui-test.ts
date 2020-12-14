import { expect } from 'chai';

describe('Index', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/717/`);
    browser.$("div.form-username-slash input[name='username']").setValue(`${process.env.USERNAME}`);
    browser.$("div.form-password-slash input[name='password']").setValue(`${process.env.PASSWORD}`);
    browser.$('input.login-button').click();
    browser.pause(10000);
    browser.$('button.gaia-mobile-v2-ui-welcomedialog-close-button').click();
    browser.pause(3000)
    browser.$('button.gaia-mobile-v2-ui-tooltip-closebutton').click();
    browser.pause(1000)
  });

  it('should save some screenshots', () => {
    // Save a full page screenshot
    browser.pause(5000);
    browser.saveFullPageScreen('index-fullPage',{ fullPageScrollTimeout: 3000 });
    browser.pause(5000);

    // // Save a full page screenshot with all tab executions
    // browser.saveTabbablePage('index-tabbable',{});
  });

  it('should compare successful with a baseline', () => {
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('index-fullPage', {})).toEqual(0);

    // // Check a full page screenshot with all tab executions
    // expect(browser.checkTabbablePage('index-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
  });
});

describe('Create', () => {
  before(() => {
     browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/`);
     $(".gaia-mobile-v2-app-indextoolbar-addrecord-border").click();
  });

  it('should save some screenshots', () => {
      browser.pause(5000);
      browser.saveFullPageScreen('Create-fullPage', { });
      browser.pause(5000);

      // browser.saveTabbablePage('Create-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
  });

  it('should compare successful with a baseline', () => {
      browser.pause(5000);
      expect(browser.checkFullPageScreen('Create-fullPage', { })).toEqual(0);
      browser.pause(5000);

      // expect(browser.checkTabbablePage('Create-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
  });
});

describe('Detail', () => {
  before(() => {
     browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/show?record=1&prev=0&next=0&view=20`);
  });

  it('should save some screenshots', () => {
      browser.pause(5000);
      browser.saveFullPageScreen('Detail-fullPage', { });
      browser.pause(5000);

      // browser.saveTabbablePage('Detail-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
  });

  it('should compare successful with a baseline', () => {
      browser.pause(5000);
      expect(browser.checkFullPageScreen('Detail-fullPage', { })).toEqual(0);

      // expect(browser.checkTabbablePage('Detail-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
  });
});

describe('Edit', () => {
  before(() => {
     browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/show?record=1&prev=0&next=0&view=20`);
     $('.gaia-mobile-v2-app-record-showtoolbar-editrecord-border').click();
  });

  it('should save some screenshots', () => {
      browser.saveFullPageScreen('Edit-fullPage', { });

      // browser.saveTabbablePage('Edit-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
  });

  it('should compare successful with a baseline', () => {
      expect(browser.checkFullPageScreen('Edit-fullPage', { })).toEqual(0);

      // expect(browser.checkTabbablePage('Edit-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
  });
});