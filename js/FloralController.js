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
        // ... bind other events
    }

    lidarComCategoriaAoClicar(categoria) {
        const questions = this.model.obterCategoria(categoria);
        const buttons = questions.map(q => this.view.criarBotaoComTextoEId(q.text,q.nome));
        const list = this.view.criarListaDeElementos(buttons);
        this.view.incorporarListaEBotao(list);
        this.view.removerPerguntas();
        this.view.criarBotaoVoltar();
        this.view.alterarPergunta();
        this.exibirFloral();
        this.view.exibirPerguntasAoCLicarEmVoltar();
        // ... append list to DOM, remove old elements, etc.
    }

    exibirFloral(){
        for (const button of document.querySelector('ol').childNodes) {
            button.addEventListener('click', (event)=>{
                this.view.criarDivComTexto(event.target);
            });
        }
    }

}

const controller = new Controller();

controller.init();
