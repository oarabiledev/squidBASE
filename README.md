# squidBASE

The squidBASE framework is built to allow web and android app developers to reach a breaching point, the framework allows this by making it similar to how android UI works.

squidBASE is just html in the backend, all squidBASE does is to reduce the amount of code needed to make interfaces using html, the main purpose for squidBASE is to act as a base for developers to create re-usable components that can be implemented easily.


# Masking The Truth With Another Truth
If you take a look at the squidBase.js file all it's doing is creating html elements and loading them in the div 'app-container'. 
However these are the early stages, what I intend to build is a framework that simplifies development and allows creating single page applications at the same time allowing switching of UI Libraries easily.

How This Works:

```jsx
import {loadModule} from './App_Core/standard_lib.js';
import {ui} from './Modules/Native Design/main.js'
loadModule('Native Design');
//The module is changeable as long as the module is change, in the future 
//Material Design 3 will be built.

function onStart(){
      lay = ui.addLayout('Linear','[]')';
      btn = ui.addButton('Hello From squidBASE',310,50,null,lay)
      ui.render();
}
function appEvent(ev){

}
```

*//READ DOCUMENTATION ON USING COMPONENTS:*

*//FEEL FREE TO CONTRIBUTE, YOU ARE ADVISED TO FOLLOW HOW
//CODE LOOKS AND FOLLOW CLEANER CODE WRITING AND EASY TO*
