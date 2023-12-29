import './main.mjs';

//let screenWidth = window.innerWidth;
//let screenHeight = window.innerHeight;

export function buttonObj(btnName, width, height, classname, parentLay) {
    this.element = drawButton(btnName, width, height, classname, parentLay, this);

    this.animate = function(animation) {
        this.element.classList.add('animate__animated', animation)
    }
    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    }
    this.setText = function(text) {
        this.element.textContent = text;
    }
    this.setBackColor = function(color) {
        this.element.style.backgroundColor = color;
    }
    this.setBackColorGradient = function(gradient) {
        this.element.style.background = gradient;
    }
    this.setStyle = function(styleObject) {
        for (const prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                this.element.style[prop] = styleObject[prop];
            }
        }
    }
    this.setMargins = function(left, top, right, bottom) {
        this.element.style.marginLeft = left + 'px';
        this.element.style.marginTop = top + 'px';
        this.element.style.marginRight = right + 'px';
        this.element.style.marginBottom = bottom + 'px';
    }
    this.setPosition = function(left, top, mode) {
        this.element.style.position = 'absolute';
        this.element.style.left = left + (mode || 'px');
        this.element.style.top = top + (mode || 'px');
    }
    this.setScale = function(x, y) {
        this.element.style.transform = `scale(${x}, ${y})`
    }
    this.disableElement = function(bool) {
        this.element.disabled = bool;
    }
    this.hideObj = function() {
        this.element.style.display = 'none';
    }
    this.showObj = function() {
        this.element.style.display = 'block';
    }

}

function drawButton(btnName, width, height, classname, parentLay, btnObj) {
    const button = document.createElement('button');
    button.textContent = btnName;

    if (screenWidth < width) button.style.width = screenWidth + 'px';
    else button.style.width = width + 'px';
    if (screenHeight < height) button.style.height = screenHeight + 'px';
    else button.style.height = height + 'px';

    if (btnObj instanceof buttonObj) {
        btnObj.state = {
            buttonClicked: false
        };
        btnObj.touchCount = 0;
    }

    button.addEventListener('click', function() {
        if (btnObj.onTouch) {
            btnObj.onTouch();
        }
    });

    if (parentLay instanceof HTMLElement) {
        parentLay.appendChild(button);
    } else if (parentLay && parentLay.element instanceof HTMLElement) {
        // Extract the HTML element from the layout object
        parentLay.element.appendChild(button);
    } else {
        // If parentLay is not an HTML element or layout object, log an error or handle it appropriately
        console.error('Error: parentLay is not a valid HTML element or layout object');
    }

    return button;
}
