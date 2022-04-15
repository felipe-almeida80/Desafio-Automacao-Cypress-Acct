Feature: Adicionar 2 produtos no carrinho
    Como usuário desejo adicionar 2 produtos difetentes no carrinho

    Scenario: Adicionar 2 produtos diferentes no carrinho
        Given que desejo comprar 2 produtos diferentes
        When seleciono o primeiro produto através da busca na home
        And adiciono o primeiro produto no carrinho através da pdp
        And clico no botão de escolher mais produtos no checkout
        Then o segundo produto é adicionado no carrinho 
        
        


    Scenario: Limpar carrinho
         Given desejo remover os produtos do carrinho
         When apresenta a mensagem que o carrinho está vazio
         Then o carrinho é fechado