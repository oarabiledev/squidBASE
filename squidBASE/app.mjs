import {ui} from './Modules/Native Design/main.mjs';

function onStart(){
    const lay = ui.addLayout("Linear","FillXY",null,null,'main');
   
    
    ui.render();
}

function appEvent(ev){
    
}



document.addEventListener('DOMContentLoaded',()=>{
    onStart();
});
