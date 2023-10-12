import { Floral } from "./Floral.js";
import { FloralView } from "./FloralView.js";

class FloralController{
    constructor(){
        this.floral = new Floral();
        this.FloralView = new FloralView();
    }
}

const floralController = new FloralController();
const floralView = new FloralView();

for (const b of document.querySelectorAll('li button')) {
    b.addEventListener('click', (event)=>{
        alert(event.target.parentElement.id);
    });

}
