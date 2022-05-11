describe("Home page", () => {
  beforeEach(() => {
    // I added these two methods as I see the age gate and cookie settings as being
    // out of scope for this spec. It also shaves several seconds off the run time.
    // However, if you want the full user flow, these two lines can be removed,
    // and then uncomment the first two in the it() block
    cy.bypassAgeGate();
    cy.bypassCookieGate();
    cy.visit("https://www.lego.com/en-dk");
  });

  it("Can search for Yoda", () => {
    // Leaving these as comments to show how you could approach this without setCookie()
    // cy.clickByTestId("age-gate-grown-up-cta");
    // cy.clickByTestId("cookie-accept-all");

    cy.clickByTestId("search-input-button")
      .getByTestId("search-input")
      .type("Yoda{enter}");
    cy.getByTestId("loading-page-wrapper").should("not.exist");
    cy.getByTestId("search").should("contain", "Showing results for Yoda");
    cy.getByTestId("product-leaf")
      .first()
      .within(() => {
        cy.getByTestId("product-leaf-title").invoke("text").as("productName");
        // The price element has hidden text "Price". Presumably for screenreaders.
        // Removing this so that only the price itself is used in assertions
        cy.getByTestId("product-price")
          .invoke("text")
          .then(text => text.replace("Price", ""))
          .as("productPrice");
        cy.clickByTestId("product-leaf-cta-add-to-cart");
      })
      .then(function () {
        const { productName, productPrice } = this;
        cy.getByTestId("add-to-bag-modal");
        cy.getByTestId("added-item")
          .should("contain", productName)
          .and("contain", productPrice);
        cy.clickByTestId("view-my-bag");
        cy.getByTestId("loading-page-wrapper").should("not.exist");
        cy.get("h1").should("contain", "My bag (1)");
        cy.getByTestId("util-bar-cart").should("contain", "1");
        cy.getByTestId("cart-item")
          .should("contain", productName)
          .and("contain", productPrice);
      });
  });
});
