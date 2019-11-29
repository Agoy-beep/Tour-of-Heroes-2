

export class HeroesPage {
    navigateTo() {
      cy.visit("http://localhost:4200/heroes");
    }

    AddHero(name){
      cy.get(".hero-name-input").type(name);
      cy.get(".add-hero-button").click();
      return this;
    }

    expectLastHeroToBe(name){
      cy.get(".list-group > :last-child()").should("contain", name);
    }
  }
