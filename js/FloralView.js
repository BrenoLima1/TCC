export class FloralView{

    constructor() {
        this.perguntas = document.getElementById('perguntas');
        this.body = document.querySelector('body');
        this.headerPergunta = document.querySelector('h1');
        this.text = this.headerPergunta.innerText;
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

        removerdiv(){
            document.querySelector('div').remove();
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
            const div = document.createElement('div');

            div.innerText = 'A essência floral mais indicada para esta situação é: \n' + button.id;
            this.body.append(div);
        }

    }
