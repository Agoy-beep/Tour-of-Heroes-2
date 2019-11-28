import {HeroesPage} from "./hero.po";

fdescribe('Heroes', () => {
  let heroesPage = new HeroesPage();

  beforeAll(() => heroesPage.navigateTo());



  /*it('should add a hero', () => {
    browser.get('/heroes');

    browser.findElement(by.id('hero-name-input'))
      .sendKeys('Bat-test-man');

    browser.findElement(by.id('hero-add-button'))
      .click();

    expect(browser.findElement(by.cssContaingText('.hero-name', 'Bat-test-man')).isDisplayed()).toBeTruthy();
  })*/

  it('should add a hero', () => {
    heroesPage.inputHero('Test Hero Gilliam')
      .clickAddHero()
      .expectHeroToBePresent('Test Hero Gilliam');
  });

})
