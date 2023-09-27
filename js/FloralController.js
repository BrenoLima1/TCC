import { Floral } from "./Floral.js";
import { FloralView } from "./FloralView.js";

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('medo').addEventListener('click', () => this.handleCategoryClick('medo'));
        document.getElementById('incerteza').addEventListener('click', () => this.handleCategoryClick('incerteza'));
        document.getElementById('dPresente').addEventListener('click', () => this.handleCategoryClick('desinteresseNoPresente'));
        document.getElementById('solidao').addEventListener('click', () => this.handleCategoryClick('solidao'));
        document.getElementById('sensivelAInfluenciasEIdeias').addEventListener('click', () => this.handleCategoryClick('sensivelAInfluenciasEIdeias'));
        document.getElementById('desanimoOuDesespero').addEventListener('click', () => this.handleCategoryClick('desanimoOuDesespero'));
        document.getElementById('preocupacaoBemEstarAlheio').addEventListener('click', () => this.handleCategoryClick('preocupacaoBemEstarAlheio'));
        // ... bind other events
    }

    handleCategoryClick(category) {
        const questions = this.model.obterCategoria(category);
        const buttons = questions.map(q => this.view.criarBotaoComTextoEId(q.text,q.nome));
        const list = this.view.criarListaDeElementos(buttons);
        const body = document.querySelector('body');
        body.append(list);
        this.alertFloral();
        // ... append list to DOM, remove old elements, etc.
    }
    // ... other controller methods

    alertFloral(){
        for (const button of document.querySelector('ol').childNodes) {
            button.addEventListener('click', ()=>{
                alert(button.firstChild.id);
            });
        }
    }
}

const model = new Floral();
const view = new FloralView();
const controller = new Controller(model, view);

controller.init();
