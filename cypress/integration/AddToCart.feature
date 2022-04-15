Feature: Fluxo de compra
    Como usuário desejo realizar uma compra

    Scenario: Adicionar produto no carrinho
        Given que desejo realizar uma compra
        When digito o produto desejado na barra de busca
        And seleciono o produto
        And na página de produto calculo o cep
        And adiciono o produto no carrinho
        Then a página é redirecionada para o checkout


Scenario: Preencher informações necessárias no Checkout e ir para o pagamento
        Given preencho as informações solicitadas
        When clico no botão ir para o checkout
        Then a página é redirecionada para a tela de pagamento 


    

    

