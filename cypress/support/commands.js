// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("getByTestId", testId => {
  cy.get(`[data-test="${testId}"]`);
});

Cypress.Commands.add("clickByTestId", (testId, args = {}) => {
  cy.getByTestId(testId).click(args);
});

Cypress.Commands.add("bypassAgeGate", () => {
  cy.setCookie("AGE_GATE", "grown_up");
});

Cypress.Commands.add("bypassCookieGate", () => {
  const preferences = JSON.stringify({
    preferences: [
      { label: "analytics", value: true, channelID: 1045, statementID: 1052 },
      {
        label: "legomarketing",
        value: true,
        channelID: 1046,
        statementID: 1053
      },
      { label: "thirdparty", value: true, channelID: 1047, statementID: 1054 }
    ],
    reconsentDate: "2021-02-25T16:09:39"
  });

  cy.setCookie("LEGO_COOKIE_SETTINGS", preferences);
});
