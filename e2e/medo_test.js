Feature('teste de florais para medo');

Scenario('teste para medo',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    I.see('MEDO');
    I.click('#medo');

    I.see('Teste de Florais O que são florais Como tomar florais Instituto Bach Por quê? SIMPLESMENTE ENTRO EM ESTADO DE PÂNICO. NÃO CONSIGO ME MOVER QUANDO TENHO CERTOS PENSAMENTOS. TEMO COISAS RUINS EXISTENTES NO MUNDO REAL, COMO DOR, DOENÇAS, ACIDENTES, POBREZA, ESCURO, ENTRE OUTROS, ACONTECEREM COMIGO. TEMO SEGUIR PENSAMENTOS E IMPULSOS E FAZER COISAS QUE SEI QUE SÃO ERRADAS. SINTO DE QUE ALGO TERRÍVEL VAI ACONTECER, MAS NÃO SEI EXATAMENTE O QUE. TEMO QUE AQUELES QUE AMO SOFRAM. ANTECIPO QUE ALGO DESAFORTUNADO LHES ACONTEÇA. VOLTAR');

    // Rock Rose
    I.click({xpath: '//button[contains(text(), "Simplesmente entro em estado de pânico. Não consigo me mover quando tenho certos pensamentos.")]'});
    I.see('Rock Rose');
    I.see('O floral providenciará calma e coragem. Ele fará inclusive com que esqueçamos o medo à medida que a coragem é restabelecida.');

    I.click('#voltar');
    I.click('#medo');

    // Mimulus
    I.click({xpath: '//button[contains(text(), "Temo coisas ruins existentes no mundo real, como dor, doenças, acidentes, pobreza, escuro, entre outros, acontecerem comigo.")]'});
    I.see('Mimulus');
    I.see('O floral ajudará a revelar a coragem tranquila e a força escondida em cada um de nós, de modo a podermos enfrentar as provações da vida diária sem medo.');

    I.click('#voltar');
    I.click('#medo');

    // Cherry Plum
    I.click({xpath: '//button[contains(text(), "Temo seguir pensamentos e impulsos e fazer coisas que sei que são erradas.")]'});
    I.see('Cherry Plum');
    I.see('Esse é o floral para quando se perdeu o controle, pois esse estado em si mesmo produz um tipo de medo pavoroso e frenético.');

    I.click('#voltar');
    I.click('#medo');

    // Aspen
    I.click({xpath: '//button[contains(text(), "Sinto de que algo terrível vai acontecer, mas não sei exatamente o que.")]'});
    I.see('Aspen');
    I.see('Por um lado, o medo Aspen pode ser apenas a sensação de um pressentimento, a ansiedade desconfortável de pressentir que algo vai se passar. Por outro lado, pode ser um sentimento de medo profundo com sintomas físicos, como pele de galinha ou cabelos em pé.');

    I.click('#voltar');
    I.click('#medo');

    // Red Chestnut
    I.click({xpath: '//button[contains(text(), "Temo que aqueles que amo sofram. Antecipo que algo desafortunado lhes aconteça.")]'});
    I.see('Red Chestnut');
    I.see('O remédio nos ajuda a enviar pensamentos calmos e despreocupados a aqueles que amamos, para que, em vez de ser alguém que deixa todo mundo ansioso, nos tornemos rochedos imperturbáveis onde os outros se podem apoiar.');

});
