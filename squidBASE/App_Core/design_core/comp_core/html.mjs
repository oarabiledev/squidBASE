import '../../main.mjs'

export class htmlObject{
    constructor(htmlCode, width, height, id, classname, parentLay){
        this.element = this.drawHtml(htmlCode, width, height, id, classname, parentLay);
        
        this.animate = function(animation) {
            this.element.classList.add('animate__animated', animation)
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

    drawHtml(htmlCode, width, height, id, classname, parentLay){
        const html = document.createElement('div');
        html.id = id;
        html.className = classname;
        html.innerHTML = htmlCode;
        html.style.width = width + 'px';
        html.style.height = height + 'px';

        if(parentLay && parentLay.element instanceof HTMLElement){
            parentLay.element.appendChild(html);
        }
        else{
            throw 'The parent layout is not an instance of HTMLELEMENT'
        }
        return html;
    }
}