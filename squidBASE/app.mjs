import { loadModule } from './App_Core/standard_lib.mjs';
import {ui} from './Modules/Native Design/main.mjs';
import {$} from './Modules/Translation Manager/main.mjs';

loadModule('Native Design');

function onStart(){
    const lay = ui.addLayout("Linear","FillXY",null,null,'main');
   
    
    ui.render();
}

function appEvent(ev){
    
}



document.addEventListener('DOMContentLoaded',()=>{
    onStart();
});
