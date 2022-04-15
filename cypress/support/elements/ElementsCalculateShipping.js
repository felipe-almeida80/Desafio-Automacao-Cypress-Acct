
class ElementsCalculateShipping {

    // Calcular o frete e selecionar o tipo de envio
    enterProduct = () => { return '#downshift-0-input' }
    returnsResult = () => { return '.vtex-store-components-3-x-resultsItemImage' }
    zipCodeProductPage = () => { return '.vtex-address-form-4-x-input' }
    calculateShipping = () => { return '.vtex-store-components-3-x-shippingContainer > .vtex-button' }
    expressDeliveryType = () => { return ':nth-child(1) > .vtex-store-components-3-x-shippingTableCellDeliveryName > .vtex-store-components-3-x-shippingTableLabel' }

}
export default ElementsCalculateShipping;