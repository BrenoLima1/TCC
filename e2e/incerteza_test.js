Feature('teste de florais para incerteza');

Scenario('teste para incerteza',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    await I.seeElement('#incerteza');
    I.click('#incerteza');

    // Cerato
    I.click({xpath: '//button[contains(text(), "Não tenho autoconfiança suficiente para tomar minhas próprias decisões. Constantemente procuro o conselho dos outros, sendo frequentemente mal orientado/a.")]'});
    I.see('Cerato');
    I.see('Nos ajuda a ter mais confiança em nosso discernimento, escutando, assim, nossa voz interior e confiando em nossa intuição');

    I.click('#voltar');
    I.click('#incerteza');

    // Scleranthus
    I.click({xpath: '//button[contains(text(), "Sou incapaz de decidir entre duas ou mais opções.")]'});
    I.see('Scleranthus');
    I.see('Tomar este remédio nos ajuda a conhecer-nos e a saber o que queremos. Ajuda-nos também a reconectar com nossa intuição e a nos tornarmos capazes de escolher de forma simples e assertiva.');

    I.click('#voltar');
    I.click('#incerteza');

    // Gentian
    I.click({xpath: '//button[contains(text(), "Sou facilmente desencorajado/a. Qualquer pequeno atraso ou obstáculo ao meu progresso causa dúvida e desânimo.")]'});
    I.see('Gentian');
    I.see('Pode ser usado para acelerar o processo para que possamos nos concentrar em agir para que as coisas dêem certo, em vez de ficar esperando que não tivessem dado errado.');

    I.click('#voltar');
    I.click('#incerteza');

    // Gorse
    I.click({xpath: '//button[contains(text(), "Sinto grande desesperança. Não acredito que possa fazer algo.")]'});
    I.see('Gorse');
    I.see('O problema central em Gorse é a falta de fé, a perda de esperança e de confiança em si mesmo. Quando a gente se permite ver as situações de um prisma diferente, sempre tem uma saída. É essa consciência que o floral Gorse ajuda a ter.');

    I.click('#voltar');
    I.click('#incerteza');

    // Hornbeam
    I.click({xpath: '//button[contains(text(), "Não possuo força física e/ou mental o suficiente para carregar o fardo da vida. Alguma parte de minha mente e/ou meu corpo deve ser fortalecida antes que eu possa facilmente completar meu trabalho.")]'});
    I.see('Hornbeam');
    I.see('Para combater o cansaço e a exaustão quando ocorrem antes mesmo do esforço ser feito.');

    I.click('#voltar');
    I.click('#incerteza');

    // Wild Oat
    I.click({xpath: '//button[contains(text(), "Apesar de desejar alcançar um alto nível de sucesso, reconhecimento ou fama, possuo dificuldade em determinar qual ocupação seguir.")]'});
    I.see('Wild Oat');
    I.see('Para aqueles que sentem que querem fazer algo com sua vida que realmente valha a pena, porém não sabem que direção tomar. Eles andam à deriva, de uma coisa para a outra, sem encontrar seu caminho verdadeiro. Como resultado, se frustam e se desanimam.');

});
