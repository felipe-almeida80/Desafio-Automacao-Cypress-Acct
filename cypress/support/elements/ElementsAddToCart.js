
class ElementsAddToCart {

    // Pesquisar produto, ir p/ a PDP, selecionar a cor, alterar a quantidade, calcular o frete e selecionar o tipo de envio
    enterProduct = () => { return '#downshift-0-input' }
    returnsResult = () => { return '.vtex-store-components-3-x-resultsItemImage' }
    selectCollor = () => { return '.vtex-store-components-3-x-skuSelectorItem--fuchsia > .vtex-store-components-3-x-skuSelectorInternalBox > .absolute' }
    collorSelected = () => { return '.vtex-store-components-3-x-skuSelectorSelectorImageValue' }
    addAndRemoveQuantity = () => { return '.vtex-numeric-stepper__plus-button' }
    zipCodeProductPage = () => { return '.vtex-address-form-4-x-input' }
    calculateShippingPdp = () => { return '.vtex-store-components-3-x-shippingContainer > .vtex-button' }
    expressDeliveryType = () => { return ':nth-child(1) > .vtex-store-components-3-x-shippingTableCellDeliveryName > .vtex-store-components-3-x-shippingTableLabel' }
}
class ElementsCheckout {
    
    // Navegar p/ o checkout
    clickAddToCart = () => { return '.pr0 > .vtex-button > .vtex-button__label' }
    proceedToCheckout = () => { return '#proceed-to-checkout' }
    calculateShippingCart = () => { return '.srp-data > #shipping-calculate-link' }
    shipPostalcodeCart = () => { return '#ship-postalCode' }
    cartToOrderForm = () => { return '#cart-to-orderform' }
    clientEmail = () => { return '#client-pre-email' }
    clientEmailBtn = () => { return '#btn-client-pre-email > span' }
    clientFirstName = () => { return '#client-first-name' }
    clientLastName = () => { return '#client-last-name' }
    clientPhone = () => { return '#client-phone' }
    goToShipping = () => { return '#go-to-shipping' }
    shipStreet = () => { return '#ship-street' }
    goToPayment = () => { return '#btn-go-to-payment' }
    bankInvoicePayment = () => { return '#payment-group-bankInvoicePaymentGroup > .payment-group-item-text' }
    /* 
        cy.get('[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"]').click()
    } */
}
export default {ElementsAddToCart,
                ElementsCheckout
}