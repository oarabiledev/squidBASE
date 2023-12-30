import './main.mjs'

var pop;
export function popUpObject(text,width,height,id,classname,parentLay){
    this.element = drawPopUp(text,width,height,id,classname,parentLay,this);

    this.showPopUp = function(){
        pop.className = "show";
        setTimeout(function(){ pop.className = pop.className.replace("show", ""); }, 3000);
    }
}

function drawPopUp(text,width,height,id,classname,parentLay,popUpObj){
    pop = document.createElement('div');
    pop.textContent = text;
    if(!id){
        pop.id = "snackbar";
    }
    else pop.id = id;
    pop.className = classname;
    pop.style.width = width + 'px';
    
    if(parentLay && parentLay.element instanceof HTMLElement){
        parentLay.element.appendChild(pop);
    }
    else{
        throw 'PopUp Element Not Added: Either Layout Not Defined \n Or PopUp Undefined';
    }
    return pop;
}
