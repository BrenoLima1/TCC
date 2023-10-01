import { Floral } from "./Floral.js";
import { FloralView } from "./FloralView.js";

class Controller {

    constructor() {
        this.model = new Floral();
        this.view = new FloralView();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('medo').addEventListener('click', () => this.lidarComCategoriaAoClicar('medo'));
        document.getElementById('incerteza').addEventListener('click', () => this.lidarComCategoriaAoClicar('incerteza'));
        document.getElementById('dPresente').addEventListener('click', () => this.lidarComCategoriaAoClicar('desinteresseNoPresente'));
        document.getElementById('solidao').addEventListener('click', () => this.lidarComCategoriaAoClicar('solidao'));
        document.getElementById('sensivelAInfluenciasEIdeias').addEventListener('click', () => this.lidarComCategoriaAoClicar('sensivelAInfluenciasEIdeias'));
        document.getElementById('desanimoOuDesespero').addEventListener('click', () => this.lidarComCategoriaAoClicar('desanimoOuDesespero'));
        document.getElementById('preocupacaoBemEstarAlheio').addEventListener('click', () => this.lidarComCategoriaAoClicar('preocupacaoBemEstarAlheio'));
    }

    lidarComCategoriaAoClicar(categoria) {
        const questions = this.model.obterCategoria(categoria);
        const buttons = questions.map(q => this.view.criarBotaoComTextoEId(q.text,q.nome));
        const list = this.view.criarListaDeElementos(buttons);

        this.view.incorporarListaEBotao(list);
        this.view.removerPerguntas();
        this.view.alterarPergunta('Por quê?');
        this.view.exibirPerguntasAoCLicarEmVoltar();
        this.exibirFloral();
    }

    exibirFloral(){
        for (const button of document.querySelector('ol').childNodes) {
            button.firstChild.addEventListener('click', (event)=>{
                this.view.criarDivComTexto(event.target);
                this.view.mudarCorBotaoSelecionado(event.target);
                this.view.removerBotoesNaoSelecionados(event.target);
                this.view.criarBotaoVoltar();
            });
        }
    }

}

const controller = new Controller();

controller.init();
