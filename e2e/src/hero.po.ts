import {browser, by} from 'protractor';

export class HeroesPage {
    navigateTo() {
      browser.get('/heroes');
      return this;
    }

    inputHero(heroName: string) {
      browser.findElement(by.id('hero-name-input'));
      return this;
    }

    clickAddHero(){
      browser.findElement(by.id('hero-add-button'));
      return this;
    }

    //still needs expectHeroToBePresent
  }
