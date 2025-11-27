import userData from "../fixtures/user.json";
//const userData= require('../fixtures/user.json');
describe("Cypress Basic Demo", () => {
  //   //load fixture
  //   let userData;
  //     before(()=>{
  //         cy.fixture('user').then((data)=>{
  //             userData=data;
  //         })
  //     })

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
    cy.get("#user-name").type(userData.email);
    cy.get("#password").type(userData.password);
    cy.contains("Login").click();
    // cy.get('.submit-button').click();
    cy.url().should("contain", "inventory");
  });

  //   it("Check page loads correctly", () => {
  //     cy.get(".login_logo").should("be.visible");
  //   });
  //   it("Login using fixture data", () => {
  //     cy.get("#user-name").type("standard_user");
  //     cy.get("#password").type("secret_sauce");
  //     cy.contains("Login").click();
  //     // cy.get('.submit-button').click();
  //     cy.url().should("contain", "inventory");
  //   });

  it("Verify product list after login", () => {
    // cy.get("#user-name").type("standard_user");
    // cy.get("#password").type("secret_sauce");
    // cy.contains("Login").click();

    //selectors and assertions
    cy.get(".inventory_item").should("have.length.greaterThan", 1);
    cy.contains("Add to cart").should("exist");
  });
  it("Add to cart", () => {
    // cy.get("#user-name").type("standard_user");
    // cy.get("#password").type("secret_sauce");
    // cy.contains("Login").click();

    cy.contains("Sauce Labs Backpack")
      .parents(".inventory_item")
      .contains("Add to cart")
      .click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });
});
