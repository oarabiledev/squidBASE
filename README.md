# squidBASE

![squidBASE](squidBASE.png)

The squidBASE framework is built to allow web and android app developers to reach a breaching point, the framework allows this by making it similar to how android UI works.

squidBASE is just html in the backend, all squidBASE does is to reduce the amount of code needed to make interfaces using html, the main purpose for squidBASE is to act as a base for developers to create re-usable components that can be implemented easily.

Id like to give special Thanks To Creators of Animate.css

[Animate.css | A cross-browser library of CSS animations.](https://animate.style/)

So as the contributors to beer.css which allow squidBASE to port Material Design 3
[Beer.css | Build Material Design In Real Time.](https://www.beercss.com/)

How This Works:

All Your Code Is Placed Within the ‘app.mjs’ file and is references within index after the ‘standard_lib.mjs’ file has been loaded.

```jsx
import { ui } from'./Modules/Native Design/main.mjs'

function onStart(){
    const lay = ui.addLayout('Linear','FillXY,HCenter,Vertical',null,null,'main');
    
    const btn = ui.addButton('Hey From squidBASE',350,50,null,null,lay)
    ui.render();
}

function appEvent(ev){
    
}

document.addEventListener('DOMContentLoaded',()=>{
    onStart();
});
```

*//READ DOCUMENTATION ON USING COMPONENTS:*

*//FEEL FREE TO CONTRIBUTE, YOU ARE ADVISED TO FOLLOW HOW
//CODE LOOKS AND FOLLOW BETTER CODING STANDARD.*

*//REMEMBER YOUR CODE MUST DOCUMENT ITSELF.*

**My Contacts:**

oarabilekoore@protonmail.com [Email]

@oneofakind_tm [Instagram]
