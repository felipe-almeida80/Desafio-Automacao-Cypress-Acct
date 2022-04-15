Feature: Cálculo de frete
   Como usuário desejo calcular o frete na página de produto

   Scenario: calcular frete na pdp
      Given que desejo calcular o frete na página do produto
      When digito o cep
      Then O valor do frete é apresentado