/* global Given, Then, When */

import PoAddMoreProdutcs from '../pageobjects/PoAddMoreProducts'
const poAddMoreProdutcs = new PoAddMoreProdutcs

//Adicionando produtos

Given(/^que desejo comprar 2 produtos diferentes$/, () => {
	poAddMoreProdutcs.openSite()
});

When(/^seleciono o primeiro produto através da busca na home$/, () => {
	poAddMoreProdutcs.searchProduct1()
    poAddMoreProdutcs.returnedResult1()
    
});

And(/^adiciono o primeiro produto no carrinho através da pdp$/, () => {
	poAddMoreProdutcs.shipping()
    poAddMoreProdutcs.addedProduct1()
});

And(/^clico no botão de escolher mais produtos no checkout$/, () => {
	poAddMoreProdutcs.goToCheckout()
});

Then(/^o segundo produto é adicionado no carrinho$/, () => {
	poAddMoreProdutcs.searchProduct2()
    poAddMoreProdutcs.returnedResult2()
    poAddMoreProdutcs.addedProduct2()
});


//Removendo produtos

Given(/desejo remover os produtos do carrinho/, () => {
	poAddMoreProdutcs.productRemoved1()
	poAddMoreProdutcs.productRemoved2()    
});

When(/apresenta a mensagem que o carrinho está vazio/, () => {
	poAddMoreProdutcs.cartEmpty()
});

Then(/o carrinho é fechado/, () => {
	
	poAddMoreProdutcs.cartClosed()
});

