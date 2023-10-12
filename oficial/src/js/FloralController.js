import { Floral } from "./Floral.js";
import { FloralView } from "./FloralView.js";

class FloralController{
    constructor(){
        this.floral = new Floral();
        this.floralView = new FloralView();
    }
}

const floralController = new FloralController();

floralController.floralView.realizarEventoParaTodos('li button','click');
