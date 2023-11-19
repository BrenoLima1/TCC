Feature('teste de florais para desânimo ou desespero');

Scenario('teste para desânimo ou desespero',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    await I.seeElement('#desanimoOuDesespero');
    I.click('#desanimoOuDesespero');

    //Larch
    I.click({xpath: '//button[contains(text(), "Não me considero tão bom/boa ou capaz quanto aqueles ao meu redor, espero fracassar e sinto que nunca serei um sucesso, portanto não me arrisco ou não faço uma tentativa forte o suficiente para ter sucesso.")]'});
    I.see('Larch');
    I.see('Esse floral ajuda a avançar independentemente da ideia de sucesso ou fracasso. Desse modo, a pessoa se permite tirar melhor partido da vida ao estar melhor preparada para correr riscos e para se envolver neles.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Pine
    I.click({xpath: '//button[contains(text(), "Eu me culpo e nunca estou satisfeito/a com meus esforços ou resultados, trabalho duro e sofro muito com os fracassos que atribuo a mim mesmo. Às vezes, há um erro por parte de outra pessoa, mas assumo a responsabilidade por isso.")]'});
    I.see('Pine');
    I.see('Pine sente o desejo verdadeiro de se responsabilizar e mesmo de carregar o fardo dos outros, se isso os ajudar a viver melhor. No entanto, ele tem a sabedoria para reconhecer que essa nem sempre é a melhor forma de ajudar os outros.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Elm
    I.click({xpath: '//button[contains(text(), "Estou fazendo um bom trabalho, seguindo a vocação da minha vida e espero fazer algo de importância para mim e/ou demais pessoas. No entanto, às vezes há períodos de depressão quando sinto que a tarefa que abracei é muito difícil e não está ao meu alcance.")]'});
    I.see('Elm');
    I.see('O floral ajuda a dissipar esses sentimentos para que possamos retomar nossa vida livres da ameaça interna de falhar.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Sweet Chestnut
    I.click({xpath: '//button[contains(text(), "Em momentos de angústia, sinto uma sobrecarga, como se minha mente e corpo tivessem atingido seu limite, e parece que não resta nada além de destruição e aniquilação.")]'});
    I.see('Sweet Chestnut');
    I.see('Em estado extremo, o remédio nos ajuda a manter nossas vidas sob nosso domínio, renovando a esperança e a força.E por vezes, o caminho se abre onde menos se esperava.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Star of Bethlehem
    I.click({xpath: '//button[contains(text(), "Estou em grande sofrimento sob condições que produzem grande infelicidade (como o choque de notícias graves, a perda de uma pessoa querida, ou o terror subsequente a um acidente).")]'});
    I.see('Star of Bethlehem');
    I.see('Esse é o floral para combater os efeitos posteriores do choque, seja ele causado por más notícias que não esperávamos, ou por qualquer situação desagradável e indesejada.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Willow
    I.click({xpath: '//button[contains(text(), "Sinto amargura e ressentimento em relação às tribulações da vida, sinto que não mereço tais tribulações e perdi o interesse em coisas que antes apreciava.")]'});
    I.see('Willow');
    I.see('Esse floral encoraja o renascer do otimismo e da esperança. Ele nos ajuda a sermos mais generosos com os outros e a reconhecer que nossa postura negativa acaba atraindo o azar de que tanto nos queixamos.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Oak
    I.click({xpath: '//button[contains(text(), "Luto com as dificuldades da vida diária, mantendo a coragem para continuar lutando.")]'});
    I.see('Oak');
    I.see('O floral é utilizado para ajudar a se manter firme perante a adversidade e, ao mesmo tempo, lhe ensina que é melhor parar do que quebrar diante da tensão.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');

    //Crab Apple
    I.click({xpath: '//button[contains(text(), "Sinto que sou uma pessoa impura, indigna ou insatisfeita com minha aparência física ou personalidade. Preocupo-me constantemente em eliminar impurezas e imperfeições de meu corpo e do ambiente em que me encontro.")]'});
    I.see('Crab Apple');
    I.see('Sua função principal é ajudar aqueles que desgostam de sua aparência física ou personalidade ou que sentem que têm algo neles sujo ou tóxico.');

    I.click('#voltar');
    I.click('#desanimoOuDesespero');
});
