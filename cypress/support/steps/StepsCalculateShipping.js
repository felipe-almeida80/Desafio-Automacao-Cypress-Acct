/* global Given, Then, When */

import PoCalculateShipping from '../pageobjects/PoCalculateShipping'
const poCalculateShipping = new PoCalculateShipping


Given(/que desejo calcular o frete na página do produto/, () => {
    poCalculateShipping.openSite()
    poCalculateShipping.searchProduct()
});

When(/digito o cep/, () => {
    poCalculateShipping.shipp()
});

Then(/O valor do frete é apresentado/, () => {
    poCalculateShipping.shipCalculated()
});
