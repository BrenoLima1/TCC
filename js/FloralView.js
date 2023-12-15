export class FloralView{

    constructor() {
        this.opcoes = document.getElementById('sentimentos').parentElement;
        this.body = document.querySelector('body');
        this.headerPergunta = document.querySelector('h1');
        this.text = this.headerPergunta.innerText;
        this.textoInicioResultado = 'A essência floral mais indicada para esta situação é: \n\n';
    }

    criarBotaoComTextoIdECategoria(text, idBotao, categoria) {
            const button = document.createElement('button');

            Object.assign(button, {innerText: text, id: idBotao, class: categoria});

            button.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'simple', categoria);

            return button;
        }

        criarListaDeElementos(elements) {
            const list = document.createElement('ul');
            list.id = 'opcoes';
            elements.forEach(element => {
                const listItem = document.createElement('li');
                listItem.className = 'mdl-list__item';

                listItem.appendChild(element);
                list.appendChild(listItem);
            });

            return list;
        }

        incorporarListaEBotao(list){
            const frag = document.createDocumentFragment();
            frag.append(list,this.criarBotaoVoltar());
            this.body.appendChild(frag);
        }

        removerPerguntas() {
            this.opcoes.remove();
        }

        criarBotaoVoltar() {
            const botaoVoltar = document.createElement('button');

            Object.assign(botaoVoltar, {innerText: 'Voltar', id: 'voltar', classList :"mdl-button mdl-js-button mdl-button--accent"});

            return botaoVoltar;
        }

        removerdiv(){
            const resultado = document.getElementById('resultado');
            if (resultado ) {
                resultado.remove();
                }
        }

        exibirPerguntasAoCLicarEmVoltar(){
            const frag = document.createDocumentFragment();
            document.getElementById('voltar').addEventListener('click', (event)=>{
                document.querySelector('ul').remove();
                frag.appendChild(this.opcoes);
                this.body.appendChild(frag);
                this.headerPergunta.innerText = this.text;

                event.target.remove();
                this.removerdiv();
            });
        }

        alterarPergunta(pergunta){
            this.headerPergunta.innerText = pergunta;
        }

        criarDivComTexto(){
            const divResultado = document.createElement('div');

            Object.assign(divResultado, {innerText: this.textoInicioResultado, id: 'resultado'});

            this.body.insertBefore(divResultado,document.getElementById('voltar'));
        }

        destacarOpcaoSelecionada(botaoSelecionado){
            botaoSelecionado.style.height = 'fit-content';
            botaoSelecionado.style.borderRadius = '8%';
            botaoSelecionado.style.borderStyle = 'solid';
        }

        removerBotoesNaoSelecionados(botaoSelecionado){
            const listaItens = document.querySelectorAll('li');

            listaItens.forEach(li => {
                if(li.firstChild !== botaoSelecionado){
                    li.remove();
                    botaoSelecionado.parentElement.style.listStyleType ='none';
                    botaoSelecionado.disabled = 'true';
                    botaoSelecionado.style.color = 'black';
                    botaoSelecionado.style.borderColor = 'red';
                    botaoSelecionado.style.fontWeight = '550';
                    botaoSelecionado.style.fontSize = 'large';
                }
            });
        }

        exibirFlor(target){
            document.querySelector('h1').innerText = '';

            const frag = document.createDocumentFragment();
            const divCard = document.createElement('div');
            const divMdlCardTitle = document.createElement('div');
            const h2NomeFloral = document.createElement('div');
            const divTexto = document.createElement('div');
            const divActions = document.createElement('div');
            const a = document.createElement('a');

            divCard.classList.add('demo-card-square', 'mdl-card', 'mdl-shadow--2dp');

            divMdlCardTitle.classList.add('mdl-card__title', 'mdl-card--expand');
            divMdlCardTitle.id = 'mdl-card__title';
            divMdlCardTitle.style.background = `url('../style/img/florais/${target.class}/${target.id}.png') 15%  #46B6AC`;
            divMdlCardTitle.style.backgroundSize = 'cover';

            h2NomeFloral.classList.add('mdl-card__title-text');
            h2NomeFloral.innerText = target.id;

            divTexto.classList.add('mdl-card__supporting-text');
            divTexto.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nAenan convallis.';

            divActions.classList.add('mdl-card__actions','mdl-card--border');

            Object.assign(a, {innerText: 'Detalhes', id: 'detalhes', href :"https://www.bachcentre.com/pt/os-florais/os-38-remedios/" + target.id, target: '_blank'});
            a.classList.add('mdl-button', 'mdl-button--colored', 'mdl-js-button', 'mdl-js-ripple-effect');

            divActions.appendChild(a);
            divMdlCardTitle.appendChild(h2NomeFloral);
            divCard.append(divMdlCardTitle,divTexto,divActions);
            frag.appendChild(divCard);
            document.getElementById('resultado').appendChild(frag);
        }

    }
