import { ui } from'./App_Core/main.mjs'

var textSearch;
function onStart(){
    const lay = ui.addLayout('Linear','FillXY,HCenter,Vertical',null,null,'main');
    
    const btn = ui.addButton('Begin Your Search For squidBASE Packages 🤖',380,50,'search',null,lay)
    btn.setOnTouch(()=>{
        btn.animate('animate__backOutDown',()=>{
            textSearch = ui.addTextField('text','Find Your squidBASE Packages 👻',380,50,'search',null,lay);
            textSearch.animate('animate__backInDown');
        });
    });
    ui.render();
}

document.addEventListener('DOMContentLoaded',()=>{
    onStart();
})
