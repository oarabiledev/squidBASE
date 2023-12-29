# squidBASE Docs

![squidBASE](squidBASE.png)

### Special Thanks To:

I'd like to gice special thanks to creators of animat.css
![Animate.css](https://animate.style/)


### Native Layouts:

```jsx
ui.addLayout(type, options, width, height, parentLay);
//Set parentLay as main if its the main lay.

```

***Types Of Layouts:***

- Card
- Linear
- Frame
- Grid
- Absolute
- Slide

***Available Options:***

- FillXY
- FillX
- FillY
- Center
- VCenter
- HCenter
- Left
- Right
- Top
- Bottom
- Vertical
- Horizontal

***Available Methods:***

```jsx
lay.animate()
//Check README animate example

lay.setSize(width,height,options)
//options px,dp,rem etc

lay.setBackColor(color)

lay.setBackColorGradient(colorGradient)

lay.setBackground(imgDir)

lay.setCornerRadius(radius,mode)
//mode i.e. px/dp/rem e.t.c

lay.setOnContextMent(func)

lay.setStyle()

lay.setOnTouch()

lay.setMargins(left,top,right,bottom)

lay.setPosition(left,top)

lay.setScale(x,y)

lay.removeChild(child)

lay.hideObj()

lay.showObj()

lay.destroyObj()
```

---

### Native Buttons:

You must import *ui* from *‘native design/main.mjs’*

then *loadModule(’Native Design’).*

```jsx
ui.addButton(btnName, width, height, classname, parentLay);
//Always asign a variable to any ui component.
```

***Methods Available:***

```jsx
btn.animate()
//Uses Animator CSS
i.e 
btn.animate('animate__slideInUp')

btn.setOnTouch()

btn.setText()

btn.setBackcolor()

btn.setBackColorGradient()

btn.setStyle()
//Check README Example

btn.setMargins(left,top,right,bottom)

btn.setPosition(left,top)

btn.setScale(x,y)

btn.disableElement()

btn.hideObj()

btn.showObj()
```

---

### Native Text:

```jsx
ui.addText(text, width, height, options, classname, parentLays)
```

***Methods Available:***

```jsx
txt.animate()

txt.setOnTouch()

txt.setText()

txt.setFontFile()

txt.setBackColorGradient()

txt.setBackColor()

txt.setTextColor()

txt.setStyle()

txt.setPosition(left,top)

txt.setMargins(left,top,right,bottom)

txt.setScale(x,y)

txt.disableElement()

txt.hideObj()

txt.showObj()
```

### Native Image:

```jsx
ui.addImage(source,width,height,options,classname,parentLay)
```

***Methods Available:***

```jsx
//Carry last component Methods
```

---

### Native Video:

```jsx
ui.addVideo(source, width, height, options, classname, parentLay)
```

***Methods Available:***

```jsx
//Carry last component methods
//New Methods

vid.setThumbnail(image)
vid.setVideo(source,autoplayBool,loopBool)
```

---

### Native Radio:

```jsx
ui.addRadio(radioName, id, classname, radioGroup, checkState, parentLay)
```

***Methods Available:***

```jsx
//Carry last component methods.
```

### Translation Manager:

```jsx
var lang = {
  "languages": ["English","Setswana"],
  "codes": {"english":"en","setswana":"tn"},

  "translations":{
      "HelloBtn":{
          "en":  "Hello From squidBase",
          "tn": "Bo rra squidBase Bare O Dumele"
      },
      "HelloAlert":{
          "en": "Heyyy, Alerting You.",
          "tn": "Dumela, Ke a ago Dumedisa Gape."
      }
  }
}
//Set A variable called lang within the main.mjs file of the
//Translation Manager Module
To use:
$(textReference,userLang):

$('HelloBtn','en');
//That will return: Hello From squidBase
//If userLang was tn my native language then
//The function would have returned:
// Bo rra squidBase Bare O Dumele
```
