// Import main.mjs
import '../../main.mjs'

var search;
export class textfieldObject {
    constructor(type, searchHint, width, height, id, classname, parentLay) {
        this.element = this.drawTextField(type, searchHint, width, height, id, classname, parentLay, this);
        
        this.animate = function(animation,animEndFunc) {
            this.element.classList.add('animate__animated', animation);
            this.element.addEventListener('animationend',()=>{
                    animEndFunc();
                });
        }

        this.setOnEnter = function (onEnter) {
            this.onEnter = onEnter;
        }

        this.setOnFocus = function (onFocus) {
            this.onFocus = onFocus;
        }

        this.getText = function () {
            return this.element.value;
        }

        this.setStyle = function (styleObject) {
            for (const prop in styleObject) {
                if (styleObject.hasOwnProperty(prop)) {
                    this.element.style[prop] = styleObject[prop];
                }
            }
        }

        this.setMargins = function (left, top, right, bottom) {
            this.element.style.marginLeft = left + 'px';
            this.element.style.marginTop = top + 'px';
            this.element.style.marginRight = right + 'px';
            this.element.style.marginBottom = bottom + 'px';
        }

        this.setPosition = function (left, top, mode) {
            this.element.style.position = 'absolute';
            this.element.style.left = left + (mode || 'px');
            this.element.style.top = top + (mode || 'px');
        }

        this.setScale = function (x, y) {
            this.element.style.transform = `scale(${x}, ${y})`
        }

        this.disableElement = function (bool) {
            this.element.disabled = bool;
        }

        this.hideObj = function () {
            this.element.style.display = 'none';
        }

        this.showObj = function () {
            this.element.style.display = 'block';
        }
    }

    drawTextField(type, searchHint, width, height, id, classname, parentLay, searchObj) {
        search = document.createElement('input');
        search.type = type;
        search.placeholder = searchHint;

        search.style.width = width + 'px';
        search.style.height = height + 'px';
        
        if(id){
            search.id = id;
        }
        if(classname){
            search.className = classname;

        }
        
        search.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                if (searchObj.onEnter) {
                    searchObj.onEnter();
                }
            }
        });

        search.addEventListener('mouseup', () => {
            if (searchObj.onFocus) {
                searchObj.onFocus();
            }
        });
        
        if (parentLay && parentLay.element instanceof HTMLElement) {
            parentLay.element.appendChild(search);
        } else {
            throw 'Search Element Not Added: Either Layout Not Defined \n Or Search Undefined';
        }

        return search;
    }

}
