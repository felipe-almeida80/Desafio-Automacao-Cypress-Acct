/* global Given, Then, When */

import PoAddToCart from '../pageobjects/PoAddToCart'
const poAddToCart = new PoAddToCart

//Adicionar produto no carrinho

Given(/que desejo realizar uma compra/, () => {
	poAddToCart.openSite()
});

When(/digito o produto desejado na barra de busca/, () => {
	poAddToCart.searchProduct()
});

And(/seleciono o produto/, () => {
	poAddToCart.returnedResult()
	poAddToCart.collor()
	poAddToCart.quantityProduct()
});

And(/na página de produto calculo o cep/, () => {
	poAddToCart.shipping()

});

And(/adiciono o produto no carrinho/, () => {
	poAddToCart.addedProduct()
});

Then(/a página é redirecionada para o checkout/, () => {
	poAddToCart.goToCheckout()
	
});

//Preencher informações necessárias no Checkout e ir para o pagamento


Given(/preencho as informações solicitadas/, () => {
	poAddToCart.fillForm()
});

When(/clico no botão ir para o checkout/, () => {
	poAddToCart.ship()
});

Then(/a página é redirecionada para a tela de pagamento/, () => {
	poAddToCart.payment()
});







