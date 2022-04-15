/// <reference types="Cypress" />

import {
    ElementsAddToCart,
    ElementsCheckout
} from '../elements/ElementsAddToCart'
const elementsAddToCart = new ElementsAddToCart
const elementsCheckout = new ElementsCheckout
const url = Cypress.config("baseUrl")

class PoAddToCart {

    //Homepage
    openSite() {
        cy.visit(url)
    }

    searchProduct() {
        cy.get(elementsAddToCart.enterProduct()).type('work shirt')
    }
    returnedResult() {

        cy.get(elementsAddToCart.returnsResult()).click()
    }

    //Página de produto
    collor() {
        cy.get(elementsAddToCart.selectCollor()).click()
        cy.get(elementsAddToCart.collorSelected()).should('have.text', 'Fuchsia')
    }
    quantityProduct() {
        cy.get(elementsAddToCart.addAndRemoveQuantity()).click()
    }

    shipping() {
        cy.get(elementsAddToCart.zipCodeProductPage()).type('90001')
        cy.get(elementsAddToCart.calculateShippingPdp()).click()
        cy.get(elementsAddToCart.expressDeliveryType()).click().should('have.text', 'Express')
    }
    addedProduct() {
        cy.get(elementsCheckout.clickAddToCart()).click()
    }

    //Checkout
    goToCheckout() {
        cy.get(elementsCheckout.proceedToCheckout()).click()
        cy.wait(2000)
        cy.get(elementsCheckout.calculateShippingCart()).click()
        //cy.wait(2000)
        cy.get(elementsCheckout.shipPostalcodeCart()).type('90001')
        cy.wait(2000)
    }
    fillForm() {
        cy.get(elementsCheckout.cartToOrderForm()).click()
        cy.get(elementsCheckout.clientEmail()).type('felipe.almeida@acct.global')
        cy.get(elementsCheckout.clientEmailBtn()).click()
        cy.get(elementsCheckout.clientFirstName()).type('Felipe')
        cy.get(elementsCheckout.clientLastName()).type('De Almeida')
        cy.get(elementsCheckout.clientPhone()).type('(408) 982-1544')
    }
    ship() {
        cy.get(elementsCheckout.goToShipping()).click()
        cy.wait(2000)
        cy.get(elementsCheckout.shipStreet()).type('Alameda Mamoré')
        //cy.wait(2000)
    }
    payment() {
        cy.get(elementsCheckout.goToPayment()).click()
        cy.get(elementsCheckout.bankInvoicePayment()).click().should('have.text', 'Invoice')
    }
}
export default PoAddToCart;