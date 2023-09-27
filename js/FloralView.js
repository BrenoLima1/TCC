export class FloralView{

    constructor() {
        this.perguntas = document.getElementById('perguntas');
        this.body = document.querySelector('body');
        this.h1 = document.querySelector('h1');
        this.text = this.h1.innerText;
    }

        criarBotaoComTextoEId(text, id) {
            const button = document.createElement('button');

            button.innerText = text;
            button.id = id;

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

        // ... other view methods

        removerPerguntas() {
            this.perguntas.remove();
        }

        criarBotaoVoltar() {
            const botaoVoltar = document.createElement('button');
            botaoVoltar.innerText = 'Voltar';
            botaoVoltar.id = 'voltar';

            return botaoVoltar;
        }

        exibirPerguntasAoCLicarEmVoltar(){
            document.getElementById('voltar').addEventListener('click', (event)=>{
                document.querySelector('ol').remove();
                this.body.append(this.perguntas);
                this.h1.innerText = this.text;
                event.target.remove();
            });
        }

        alterarPergunta(){
            this.h1.innerText = 'Por quê?'
        }

        criarDivComTexto(){
            const div = document.createElement('div');

        }

    }
