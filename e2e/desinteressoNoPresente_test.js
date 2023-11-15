Feature('teste de florais para desinteresse no presente');

Scenario('teste para desinteresse no presente',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    await I.seeElement('#dPresente');
    I.click('#dPresente');

    // Clematis
    I.click({xpath: '//button[contains(text(), "Não tenho interesse na vida. Vivo mais em esperanças de tempos mais felizes, nos quais meus ideais poderão se tornar realidade.")]'});
    I.see('Clematis');
    I.see('Esse floral ajuda a nos trazer de volta para a terra e a cair em si para que a pessoa possa construir uma vida melhor em vez de continuar sonhando acordado.');

    I.click('#voltar');
    I.click('#dPresente');

    // Honeysuckle
    I.click({xpath: '//button[contains(text(), "Não espero felicidade maior da que tive no passado.")]'});
    I.see('Honeysuckle');
    I.see('Ajuda a aprender com o passado e a recordá-lo sem necessidade de o reviver, para que consigam se adentrar no presente e desfrutar tanto do dia de hoje como do amanhã.');

    I.click('#voltar');
    I.click('#dPresente');

    // Wild Rose
    I.click({xpath: '//button[contains(text(), "Apenas deslizo pela vida, não me esforço para melhorar as coisas. Apenas aceito a vida como ela é.")]'});
    I.see('Wild Rose');
    I.see('Esse floral ajuda a despertar de novo o interesse pela vida.\nEm estado positivo, Wild Rose é a típica pessoa feliz e despreocupada. Em vez de apatia, um sentimento de propósito lhe traz uma satisfação e uma felicidade sempre crescente.');

    I.click('#voltar');
    I.click('#dPresente');

    // Olive
    I.click({xpath: '//button[contains(text(), "A vida diária é um trabalho duro. Já sofri tanto que estou esgotado/a, sentindo que não possuo força para fazer nenhum esforço.")]'});
    I.see('Olive');
    I.see('É o remédio para o cansaço e a exaustão depois de qualquer tipo de esforço físico ou mental intenso ou depois de um período prolongado de convalescença.');

    I.click('#voltar');
    I.click('#dPresente');

    // White Chestnut
    I.click({xpath: '//button[contains(text(), "Não consigo impedir que pensamentos, ideias e argumentos indesejados entrem em minha cabeça. Após um tempo tendo descartado estes pensamentos, eles simplesmente retornam.")]'});
    I.see('White Chestnut');
    I.see('É o remédio para os pensamentos indesejados e para as discussões mentais que se introduzem em nossa linha de pensamento e não nos permitem concentrar.');

    I.click('#voltar');
    I.click('#dPresente');

    // Mustard
    I.click({xpath: '//button[contains(text(), "Sou suscetível a tempos de melancolia ou desespero. É muito difícil mostrar-me feliz ou alegre.")]'});
    I.see('Mustard');
    I.see('Este floral dissipa as nuvens negras que se apoderam de nós para que possamos de novo apreciar a alegria e a paz de nossas vidas');

    I.click('#voltar');
    I.click('#dPresente');

    // Chestnut Bud
    I.click({xpath: '//button[contains(text(), "Levo muito tempo para aprender as lições da vida diária, pois não tiro proveito da observação e experiência.")]'});
    I.see('Chestnut Bud');
    I.see('É importante saber deixar seu passado para traz e prosseguir. No entanto, Chestnut Bud está, por assim dizer, “demasiado preparado” para isso! Ele dá tão pouca relevância ao passado que não aprende e acaba estando condenado a repetir seus erros.');
});
