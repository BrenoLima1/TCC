Feature('teste de florais para sensibilidade a influências e ideias');

Scenario('teste para solidão',  async ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    await I.seeElement('#sensivelAInfluenciasEIdeias');
    I.click('#sensivelAInfluenciasEIdeias');

    // Agrimony
    I.click({xpath: '//button[contains(text(), "Concordo em abrir mão de muito para não haver nenhuma briga ou discussão e escondo minhas preocupações por trás de humor e brincadeira.")]'});
    I.see('Agrimony');
    I.see('Seu efeito em estados temporários de humor é o de ajudar aqueles que estão se esforçando por não enfrentar seus problemas, relativizando-os, fazendo piadas e dando falsas risadas para evitar a dolorosa realidade.');

    I.click('#voltar');
    I.click('#sensivelAInfluenciasEIdeias');

    // Centaury
    I.click({xpath: '//button[contains(text(), "Sou excessivamente ansioso/a para servir aos outros, negligenciando minha própria missão particular na vida.")]'});
    I.see('Centaury');
    I.see('Este floral não endurece nem caleja a pessoa, em vez disso, ele ajuda a desenvolver coragem e auto determinação.');

    I.click('#voltar');
    I.click('#sensivelAInfluenciasEIdeias');

    // Walnut
    I.click({xpath: '//button[contains(text(), "Embora eu tenha ideais ambiciosos na vida, às vezes sou tentado a desviar de meus próprios ideais, metas e trabalho pelo entusiasmo, convicções ou opiniões fortes dos outros.")]'});
    I.see('Walnut');
    I.see('Como remédio contra os efeitos da mudança, Walnut é útil em todas as fases de transição de nossas vidas, desde o nascimento da dentição até à idade da ida para a escola, passando pela puberdade e o casamento, a paternidade ou a reforma.');

    I.click('#voltar');
    I.click('#sensivelAInfluenciasEIdeias');

    // Holly
    I.click({xpath: '//button[contains(text(), "Algumas vezes sou atacado/a por pensamentos dos tipos ciúmes, inveja, vingança, suspeição, entre outros. Dentro de mim sofro muito, mesmo quando não há uma causa real para minha infelicidade.")]'});
    I.see('Holly');
    I.see('O problema no cerne destas emoções é a ausência de amor, e o floral trabalha no sentido de promover nossa generosidade de espírito e nossa abertura para os outros.');
});
