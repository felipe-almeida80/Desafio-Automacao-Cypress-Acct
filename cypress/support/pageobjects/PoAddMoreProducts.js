/// <reference types="Cypress" />

import {
    ElementsAddMoreProducts,
    ElementsRemoveProducts
} from '../elements/ElementsAddMoreProducts'
const elementsAddMoreProducts = new ElementsAddMoreProducts
const elementsRemoveProducts = new ElementsRemoveProducts
const url = Cypress.config("baseUrl")

class PoAddMoreProdutcs {
  
       //Homepage
    openSite() {
        cy.visit(url)
    }

    searchProduct1() {
        cy.get(elementsAddMoreProducts.enterProduct()).type('work shirt')
    }
    returnedResult1() {
        cy.get(elementsAddMoreProducts.returnsResult()).click()
    }
    shipping() {
        cy.get(elementsAddMoreProducts.zipCodeProductPage()).type('90001')
        cy.get(elementsAddMoreProducts.calculateShippingPdp()).click()
        cy.get(elementsAddMoreProducts.expressDeliveryType()).click().should('have.text', 'Express')
    }
    addedProduct1() {
        cy.get(elementsAddMoreProducts.clickAddToCart()).click()
    }

    //Checkout
    goToCheckout() {
        cy.get(elementsAddMoreProducts.proceedToCheckout()).click()
        cy.wait(2000)
        cy.get(elementsAddMoreProducts.chooseMoreProducts()).click()//.should('have.test', 'Choose more products')
    }
    //Adicionando o segundo produto
    searchProduct2(){
        cy.get(elementsAddMoreProducts.enterProduct()).type('Jumper Best Friend')
    }
    returnedResult2(){
        cy.get(elementsAddMoreProducts.returnsResult()).click()
    }
    addedProduct2() {
        cy.get(elementsAddMoreProducts.clickAddToCart()).click()
    }
    //Removendo produtos do carrinho
    productRemoved1() {
        cy.get(elementsRemoveProducts.removeProduct1()).click()
    }    
    productRemoved2(){   
        cy.get(elementsRemoveProducts.removeProduct2()).click()
    }
    //Limpando o carrinho
    cartEmpty(){    
        cy.get(elementsRemoveProducts.miniCartEmpty()).should('have.text', 'Your cart is empty.')
    }
    cartClosed(){    
        cy.get(elementsRemoveProducts.closeMinicart()).click()
    } 

}
export default PoAddMoreProdutcs