Feature('teste de florais para solidão');

Scenario('teste para solidão',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    await I.seeElement('#solidao');
    I.click('#solidao');

    // Water Violet
    I.click({xpath: '//button[contains(text(), "Na saúde ou na doença gosto de ficar sozinho/a. Sou uma pessoa muito quieta.")]'});
    I.see('Water Violet');
    I.see('É importante saber deixar seu passado para traz e prosseguir. No entanto, Chestnut Bud está, por assim dizer, “demasiado preparado” para isso! Ele dá tão pouca relevância ao passado que não aprende e acaba estando condenado a repetir seus erros.');

    I.click('#voltar');
    I.click('#solidao');


    //Impatiens
    I.click({xpath: '//button[contains(text(), "Eu luto com a dificuldade de ser paciente com pessoas lentas e anseio por fazer as coisas no meu próprio ritmo.")]'});
    I.see('Impatiens');
    I.see('É, como o nome sugere, o remédio contra a impaciência, a frustração e a irritabilidade que normalmente vem junto.');

    I.click('#voltar');
    I.click('#solidao');

    //Heather
    I.click({xpath: '//button[contains(text(), "Sempre busco a companhia de alguém disponível, não importando quem seja, pois a acho necessária. Ficar sozinho/a por qualquer período de tempo me deixa infeliz.")]'});
    I.see('Heather');
    I.see('Este floral nos ajuda a ver nossas preocupações e nossa forma de ser desde o ponto de vista dos demais. Tendo sofrido da necessidade de falar, a pessoa se torna uma ótima confidente.');
});
