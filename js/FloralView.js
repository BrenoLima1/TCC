export class FloralView{

    constructor() {
        this.perguntas = document.getElementById('perguntas');
        this.body = document.querySelector('body');
        this.headerPergunta = document.querySelector('h1');
        this.text = this.headerPergunta.innerText;
    }

        criarBotaoComTextoEId(text, idBotao) {
            const button = document.createElement('button');

            Object.assign(button, {innerText: text, id: idBotao});

            return button;
        }

        criarListaDeElementos(elements) {
            const list = document.createElement('ol');

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
            this.perguntas.remove();
        }

        criarBotaoVoltar() {
            const botaoVoltar = document.createElement('button');

            Object.assign(botaoVoltar, {innerText: 'Voltar', id: 'voltar'});

            return botaoVoltar;
        }

        removerdiv(){
            document.getElementById('resultado').remove();
        }

        exibirPerguntasAoCLicarEmVoltar(){
            document.getElementById('voltar').addEventListener('click', (event)=>{
                document.querySelector('ol').remove();
                this.body.append(this.perguntas);
                this.headerPergunta.innerText = this.text;

                event.target.remove();
                this.removerdiv();
            });
        }

        alterarPergunta(){
            this.headerPergunta.innerText = 'Por quê?'
        }

        criarDivComTexto(button){
            const divResultado = document.createElement('div');

            Object.assign(divResultado, {innerText: 'A essência floral mais indicada para esta situação é: \n' + button.id, id: 'resultado'});

            this.body.append(divResultado);
        }

        inserirFragmento(tagPai, tagFilha){
            const fragment = document.createDocumentFragment();

            fragment.appendChild(tagFilha);
            tagPai.appendChild(fragment);
        }

    }
