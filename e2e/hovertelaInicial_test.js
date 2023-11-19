Feature('teste de florais');

Scenario('teste de tela inicial com hover',  ({ I }) => {
    I.amOnPage('http://127.0.0.1:5500/html/index.html');

    I.see('Qual sentimento está lhe prejudicando?');
    I.see('MEDO');
    I.see('INCERTEZA');
    I.see('DESINTERESSE NO PRESENTE');
    I.see('SOLIDÃO');
    I.see('SENSIBILIDADE A INFLUÊNCIAS E IDEIAS');
    I.see('DESÂNIMO OU DESESPERO');
    I.see('PREOCUPAÇÃO EXCESSIVA PELO BEM-ESTAR DOS OUTROS');

    // mover o mouse para o botão medo
    I.moveCursorTo('#medo');

    // verificar a cor do botão medo e do texto
    I.seeCssPropertiesOnElements('#medo', {
        backgroundColor: 'black',
        color: 'white'
    });

    // mover o mouse para o botão incerteza
    I.moveCursorTo('#incerteza');
    // verificar a cor do botão incerteza e do texto
    I.seeCssPropertiesOnElements('#incerteza', {
        backgroundColor: 'rgb(248, 248, 141)',
        color: 'rgb(66, 66, 66)'
    });

    // mover o mouse para o botão dPresente
    I.moveCursorTo('#dPresente');
    // verificar a cor do botão dPresente e do texto
    I.seeCssPropertiesOnElements('#dPresente', {
        backgroundColor: 'white',
        color: 'gray'
    });

    // mover o mouse para o botão sensivelAInfluenciasEIdeias
    I.moveCursorTo('#sensivelAInfluenciasEIdeias');
    // verificar a cor do botão sensivelAInfluenciasEIdeias e do texto
    I.seeCssPropertiesOnElements('#sensivelAInfluenciasEIdeias', {
        backgroundColor: 'pink',
        color: 'rgb(10, 186, 218)'
    });

    // mover o mouse para o botão desanimoOuDesespero
    I.moveCursorTo('#desanimoOuDesespero');
    // verificar a cor do botão desanimoOuDesespero e do texto
    I.seeCssPropertiesOnElements('#desanimoOuDesespero', {
        backgroundColor: 'black',
        color: '#EE82EE'
    });

    // mover o mouse para o botão preocupacaoBemEstarAlheio
    I.moveCursorTo('#preocupacaoBemEstarAlheio');
    // verificar a cor do botão preocupacaoBemEstarAlheio e do texto
    I.seeCssPropertiesOnElements('#preocupacaoBemEstarAlheio', {
        backgroundColor: 'gray',
        color: 'orange'
    });

});
