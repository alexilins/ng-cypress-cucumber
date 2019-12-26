import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given(`Пройти по ссылке {string}`, path => {
  cy.visit(path);
});

Then(`Элемент {string} содержит текст {string}`, (query, text) => {
  cy.get(query).contains(text);
});
