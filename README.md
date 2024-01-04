# squidBASE

![squidBASE](squidBASE.png)

The squidBASE framework is built to allow web and android app developers to reach a breaching point, the framework allows this by making it similar to how android UI works.

squidBASE is just html in the backend, all squidBASE does is to reduce the amount of code needed to make interfaces using html, the main purpose for squidBASE is to act as a base for developers to create re-usable components that can be implemented easily.

Id like to give special Thanks To Creators of Animate.css

[Animate.css | A cross-browser library of CSS animations.](https://animate.style/)

So as the contributors to beer.css which allow squidBASE to port Material Design 3

[Beer.css | Build Material Design In Real Time.](https://www.beercss.com/)

### How This Works:

All Your Code Is Placed Within the ‘app.mjs’ file and is references within index after the ‘standard_lib.mjs’ file has been loaded.

```jsx
import { ui,loadStyle } from'./App_Core/main.mjs'

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
```
### **Project Discontinued**

_why?_

Its a passion project, we really dont need it its basically html at the end,
I love it, and i did it to enhance my JS skills, i am a diehard JS Fan ^_~ .

_Why not continue if its passion?_

The project is not worth building.

**My Contacts:**

oarabilekoore@protonmail.com [Email]

@oneofakind_tm [Instagram]
