
class ElementsAddMoreProducts {

    // Adicionar 2 produtos diferentes no carrinho e limpar o carrinho
    enterProduct = () => { return '#downshift-0-input' }
    returnsResult = () => { return '.vtex-store-components-3-x-resultsItemImage' }
    zipCodeProductPage = () => { return '.vtex-address-form-4-x-input' }
    calculateShippingPdp = () => { return '.vtex-store-components-3-x-shippingContainer > .vtex-button' }
    expressDeliveryType = () => { return ':nth-child(1) > .vtex-store-components-3-x-shippingTableCellDeliveryName > .vtex-store-components-3-x-shippingTableLabel' }
    clickAddToCart = () => { return '.pr0 > .vtex-button > .vtex-button__label' }
    proceedToCheckout = () => { return '#proceed-to-checkout' }
    chooseMoreProducts = () => { return '#cart-choose-more-products' }
    enterProduct = () => { return '#downshift-0-input' }
    returnsResult = () => { return '.vtex-store-components-3-x-resultsItemImage' }
    clickAddToCart = () => { return '.pr0 > .vtex-button > .vtex-button__label' }

}
class ElementsRemoveProducts {
    // Remover produtos do carrinho e limpar carrinho
    removeProduct1 = () => { return '#remove-button-2000546 > .vtex-product-list-0-x-deleteIcon' }
    removeProduct2 = () => { return '#remove-button-310124166 > .vtex-product-list-0-x-deleteIcon' }
    miniCartEmpty = () => { return '.pb0 > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy' }
    closeMinicart = () => { return '.vtex-minicart-2-x-closeIcon > use' }
}
export default {
    ElementsAddMoreProducts,
    ElementsRemoveProducts
}