# squidBase
Stopping The JS Framework Madness

Hopefully this is where the the nobody crosses the line, I am developing this framework to reduce the amount of code written in html tags, behind the scenes everything is converted to html on the client.

#Masking The Truth With Another Truth
If you take a look at the squidBase.js file all it's doing is creating html elements and loading them in the div 'app-container'. 
However these are the early stages, what I intend to build is a framework that simplifies development and allows creating single page applications at the same time allowing switching of UI Libraries easily.
I intend to use a function:
```jsx
   loadInterface('Material Design 3')
```
Of course it doesn't exist yet, however this function will simply just load the css into the file, and css can take over and style the given classes.
For future, this is how I intend this to look like :
```jsx
   function onStart(){
      loadInterface('Material Design 3')
      lay = ui.createLayout('Linear','FillXY,VCenter')

btn = ui.addFilledButton('Make Changes',500,100,null,lay)

ui.render()
}
/*In the background this will use the filled button class within M3 to style that specific buttton*/
```

Feel free to contribute and add to the open sourceness of this project.
