/// <reference types="Cypress" />


import ElementsCalculateShipping from "../elements/ElementsCalculateShipping"
const elementsCalculateShipping = new ElementsCalculateShipping
const url = Cypress.config("baseUrl")

class PoCalculateShipping {
    openSite() {
        cy.visit(url)
    }
    searchProduct() {
        cy.get(elementsCalculateShipping.enterProduct()).type('work shirt')
        cy.get(elementsCalculateShipping.returnsResult()).click()
    }
    shipp(){
        cy.get(elementsCalculateShipping.zipCodeProductPage()).type('90001')
    }
    shipCalculated(){
        cy.get(elementsCalculateShipping.calculateShipping()).click()
        cy.get(elementsCalculateShipping.expressDeliveryType()).click().should('have.text', 'Express')
    }
}
export default PoCalculateShipping