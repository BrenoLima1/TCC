import { Floral } from "./Floral.js";
import { FloralView } from "./FloralView.js";

class FloralController{
    constructor(){
        this.floral = new Floral();
        this.FloralView = new FloralView();
    }
}

const floralController = new FloralController();
floralController.FloralView
