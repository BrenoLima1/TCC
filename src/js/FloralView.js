export class FloralView{

    constructor() {

    }

    criarBotaoComTextoIdECategoria(text, idBotao, categoria) {
        const button = document.createElement('button');

        Object.assign(button, {innerText: text, id: idBotao, class: categoria});

        return button;
    }

    criarListaDeElementos(elements) {
        const list = document.createElement('ul');

        elements.forEach(element => {
            const listItem = document.createElement('li');

            listItem.appendChild(element);
            list.appendChild(listItem);
        });

        return list;
    }

    incorporarListaEBotao(list){
        this.body.append(list,this.criarBotaoVoltar());
    }

    removerPerguntas() {
        this.opcoes.remove();
    }

    criarBotaoVoltar() {
        const botaoVoltar = document.createElement('button');

        Object.assign(botaoVoltar, {innerText: 'Voltar', id: 'voltar'});

        return botaoVoltar;
    }
}
