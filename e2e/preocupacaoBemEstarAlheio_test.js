Feature('teste de florais para preocupação excessiva pelo bem-estar dos outros');

Scenario('teste para preocupação excessiva pelo bem-estar dos outros',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    await I.seeElement('#preocupacaoBemEstarAlheio');
    I.click('#preocupacaoBemEstarAlheio');

    //Chicory
    I.click({xpath: '//button[contains(text(), "Atento-me excessivamente às necessidades dos outros, sempre buscando corrigir o que consideram errado e desejando que aqueles por quem me preocupo permaneçam perto de mim.")]'});
    I.see('Chicory');
    I.see('Esse floral ajuda a evidenciar o lado positivo de Chicory: o amor dado de forma livre e incondicional.');

    I.click('#voltar');
    I.click('#preocupacaoBemEstarAlheio');

    // Vervain
    I.click({xpath: '//button[contains(text(), "Possuo ideias e princípios fixos, força de vontade e coragem. Desejo converter todos ao meu redor para meu próprio ponto de vista sobre a vida.")]'});
    I.see('Vervain');
    I.see('Para pessoas perfeccionistas com um apurado sentido de justiça. Os Vervain são dotados de uma intensa energia mental que eles investem de boa vontade nas causas em que acreditam.');

    I.click('#voltar');
    I.click('#preocupacaoBemEstarAlheio');

    // Vine
    I.click({xpath: '//button[contains(text(), "Sou muito capaz, seguro/a de minhas habilidades e acredito que seria benéfico para os outros se pudessem ser persuadidos a fazerem as coisas como faço.")]'});
    I.see('Vine');
    I.see('Em seu aspecto positivo, os Vine são sábios, gentis e amáveis mentores que sabem guiar, inspirar e liderar os outros sem recorrer à força. Quando se ganha o hábito de dar ordens de forma imperativa, o floral encorajará a revelar o seu lado positivo.');

    I.click('#voltar');
    I.click('#preocupacaoBemEstarAlheio');

    // Beech
    I.click({xpath: '//button[contains(text(), "Sinto a necessidade de ver mais o bem e a beleza em tudo ao meu redor, sou capaz de ser mais tolerante, indulgente e compreensivo/a com as diferenças individuais.")]'});
    I.see('Beech');
    I.see('Por vezes a intolerância de Beech se manifesta em explosões de irritabilidade: o floral ajudará encorajando a tolerância e a compreensão e, à medida que isso acontece, também a irritabilidade vai desaparecendo.');

    I.click('#voltar');
    I.click('#preocupacaoBemEstarAlheio');

    // Rock Water
    I.click({xpath: '//button[contains(text(), "Nego muitas alegrias e prazeres da vida em nome do trabalho, pois sou muito estrito/a em meu modo de viver. Sou duro/a comigo mesmo/a e disponho-me a fazer qualquer coisa para me manter bem, forte e ativo/a.")]'});
    I.see('Rock Water');
    I.see('O floral Rock Water não nos impede de manter nossos altos ideias ou de procurar alcançá-los. Ele simplesmente nos permitirá abrandar, nos tornando mais benevolentes com nossos processos e nos ensinará a ter em conta os pequenos prazeres da vida.');

    I.click('#voltar');
    I.click('#preocupacaoBemEstarAlheio');
});
