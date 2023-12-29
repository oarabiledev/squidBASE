import './main.mjs';

export function ImageObject(source,width,height,options,classname,parentLay){
    this.element = drawImage(source,width,height,options,classname,parentLay,this);

    this.animate = function(animation) {
        this.element.classList.add('animate__animated', animation)
    };
    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    };
    this.setText = function(text) {
        this.element.textContent = text;
    };
    
    this.setBackColorGradient = function(gradient) {
        this.element.style.background = gradient;
    };
    this.setStyle = function(styleObject) {
        for (const prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                this.element.style[prop] = styleObject[prop];
            }
        }
    };
    this.setMargins = function(left, top, right, bottom) {
        this.element.style.marginLeft = left + 'px';
        this.element.style.marginTop = top + 'px';
        this.element.style.marginRight = right + 'px';
        this.element.style.marginBottom = bottom + 'px';
    };
    this.setPosition = function(left, top, mode) {
        this.element.style.position = 'absolute';
        this.element.style.left = left + (mode || 'px');
        this.element.style.top = top + (mode || 'px');
    };
    this.setScale = function(x, y) {
        this.element.style.transform = `scale(${x}, ${y})`
    };
    this.disableElement = function(bool) {
        this.element.disabled = bool;
    };
    this.hideObj = function() {
        this.element.style.display = 'none';
    };
    this.showObj = function() {
        this.element.style.display = 'block';
    };
}

function drawImage(source,width,height,options,classname,parentLay,imgObj){
    const _image = document.createElement('img');
    _image.src = source;
    _image.style.width = width + 'px';
    _image.style.height = height + 'px';

    _image.addEventListener('click',()=>{
        if(imgObj.onTouch){
            imgObj.onTouch()
        }
    })
    if(parentLay instanceof HTMLElement) {
        parentLay.appendChild(_image);
    } else if (parentLay && parentLay.element instanceof HTMLElement) {
        // Extract the HTML element from the layout object
        parentLay.element.appendChild(_image);
    } else {
        // If parentLay is not an HTML element or layout object, log an error or handle it appropriately
        console.error('Error: parentLay is not a valid HTML element or layout object');
    }

    return _image;
}
