export class FloralView{

    constructor() {
        this.perguntas = document.getElementById('sentimentos');
        this.body = document.querySelector('body');
        this.headerPergunta = document.querySelector('h1');
        this.text = this.headerPergunta.innerText;
        this.textoInicioResultado = 'A essência floral mais indicada para esta situação é: \n';
    }

        criarBotaoComTextoIdECategoria(text, idBotao, categoria) {
            const button = document.createElement('button');

            Object.assign(button, {innerText: text, id: idBotao, class: categoria});

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
                this.body.appendChild(this.perguntas);
                this.headerPergunta.innerText = this.text;

                event.target.remove();
                this.removerdiv();
            });
        }

        alterarPergunta(pergunta){
            this.headerPergunta.innerText = pergunta;
        }

        criarDivComTexto(button){
            const divResultado = document.createElement('div');

            Object.assign(divResultado, {innerText: this.textoInicioResultado + button.id, id: 'resultado'});

            this.body.insertBefore(divResultado,document.getElementById('voltar'));
            // this.body.append(divResultado);
        }

        inserirFragmento(tagPai, tagFilha){
            const fragment = document.createDocumentFragment();

            fragment.appendChild(tagFilha);
            tagPai.appendChild(fragment);
        }

        mudarCorBotaoSelecionado(botaoSelecionado){
            botaoSelecionado.style.backgroundColor = '#979700';
        }

        removerBotoesNaoSelecionados(botaoSelecionado){
            const listaItens = document.querySelectorAll('li');

            listaItens.forEach(li => {
                if(li.firstChild !== botaoSelecionado){
                    li.remove();
                    botaoSelecionado.parentElement.style.listStyleType ='none';
                    botaoSelecionado.disabled = 'true';
                    botaoSelecionado.style.color = 'black';
                    botaoSelecionado.style.fontWeight = '550';
                    botaoSelecionado.style.fontSize = 'large';
                }
            });
        }

        exibirFlor(target){
            const img = document.createElement('img');

            // img.src = `../style/img/florais/${target.class}/${target.id}.png`;
            // img.alt = target.id;
            // img.title = target.id;

            Object.assign(img,{src: `../style/img/florais/${target.class}/${target.id}.png`, alt: target.id, title: target.id, class: target.class});

            document.querySelector('div').appendChild(img);
        }

        // realizarEventoParaTodosBotoes(tag, evento, funcao){
        realizarEventoParaTodos(tag, evento){
            for (const b of document.querySelectorAll(tag)) {
                b.addEventListener(evento, (event)=>{
                    alert(event.target.parentElement.id);
                    // funcao();
                });
            }
        }

    }
