import { Floral } from "./Floral.js";
import { FloralView } from "./FloralView.js";

class FloralController{
    constructor(){
        this.floral = new Floral();
        this.floralView = new FloralView();
    }
}

const floralController = new FloralController();
const floralView = new FloralView();

floralController.floralView.realizarEventosParaTodos('li button','click');
