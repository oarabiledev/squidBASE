import {buttonObj} from './button.mjs';
import {textObject} from './text.mjs';
import {ImageObject} from './image.mjs';
import {videoObject} from './video.mjs';
import {radioObject} from './radio.mjs';
import {textfieldObject} from './textfield.mjs';
import {switchObject} from './switch.mjs';
import {popUpObject} from './popup.mjs';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

//io For Internal Functions
export const io = {}

export const ui = {
    elements: []
}

/* Layout Types:
  -Linear
  -Absolute
  -Card
  -Frame
  -Slide
*/

ui.addLayout = function(type, options, width, height, parentLay) {
    return new layoutObj(type, options, width, height, parentLay)
}

function layoutObj(type, options, width, height, parentLay) {
    if (parentLay === 'main') {
        this.element = pinMainLay(type, options, width, height, parentLay, this);
    } else {
        this.element = addLayout(type, options, width, height, parentLay, this);
    }

    this.animate = function(animation) {
        this.element.classList.add('animate__animated', animation)
    }
    this.setSize = function(width, height, mode) {
        this.element.style.width = width + mode;
        this.element.style.height = height + mode;
    }
    this.setBackColor = function(color) {
        this.element.style.backgroundColor = color;
    }
    this.setBackColorGradient = function(gradient) {
        this.element.style.background = gradient;
    }

    this.setBackground = function(imgDir) {
        this.element.style.backgroundImage = imgDir;
        this.element.style.backgroundSize = 'cover';
    }
    this.setElevation = function(){
        
    }
    this.setCornerRadius = function(radius, mode) {
        this.element.style.borderRadius = radius + mode;
    }
    this.setOnContextMenu = function(onContextMenu) {
        if (typeof onContextMenu === 'function') {
            this.element.addEventListener('contextmenu', function(event) {
                event.preventDefault();
                onContextMenu();
            });
        } else {
            console.error('Error: onContextMenu should be a function');
        }
    }
    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    }
    this.setStyle = function(styleObject) {
        for (const prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                this.element.style[prop] = styleObject[prop];
            }
        }
    }
    this.setMargins = function(left, top, right, bottom, mode) {
        this.element.style.marginLeft = left + (mode || 'px');
        this.element.style.marginTop = top + (mode || 'px');
        this.element.style.marginRight = right + (mode || 'px');
        this.element.style.marginBottom = bottom + (mode || 'px');
    }
    this.setPadding = function(left, top, right, bottom, mode) {
        this.element.style.paddingLeft = left + (mode || 'px');
        this.element.style.paddingTop = top + (mode || 'px');
        this.element.style.paddingRight = right + (mode || 'px');
        this.element.style.paddingBottom = bottom + (mode || 'px');
    }

    this.setPosition = function(left, top, mode) {
        this.element.style.position = 'absolute';
        this.element.style.left = left + (mode || 'px');
        this.element.style.top = top + (mode || 'px');
    }
    this.setScale = function(x, y) {
        this.element.style.transform = `scale(${x}, ${y})`
    }
    this.removeChild = function(child) {
        if (child && child.element instanceof HTMLElement) {
            this.element.removeChild(child.element);
        } else {
            console.error('Error: child is not a valid layout object');
        }
    }
    this.hideObj = function() {
        this.element.style.display = 'none';
    }
    this.showObj = function() {
        this.element.style.display = 'block';
    }
    this.destroyObj = function() {
        this.element.remove();
    }
}

function pinMainLay(type, options, width, height, parentLay, mainObj) {

    const layout = document.createElement('div');
    io.applyLayoutStyle(layout, type, options);

    layout.style.width = screenWidth + 'px';
    layout.style.height = screenHeight + 'px';

    ui.elements.push(layout);

    return layout;
}

function addLayout(type, options, width, height, parentLay, layObj) {
    const layout = document.createElement('div');
    io.applyLayoutStyle(layout, type, options);

    layout.style.width = width+'px';
    layout.style.height = height+'px';

    // Check if parentLay is an HTML element
    if (parentLay instanceof HTMLElement) {
        parentLay.appendChild(layout);
    } else if (parentLay && parentLay.element instanceof HTMLElement) {
        // Extract the HTML element from the layout object
        parentLay.element.appendChild(layout);
    } else {
        // If parentLay is not an HTML element or layout object, log an error or handle it appropriately
        console.error('Error: parentLay is not a valid HTML element or layout object');
    }

    return layout;
}

io.applyLayoutStyle = function(layout, type, options) {
    if (type.toLowerCase() === 'linear') {
        layout.style.display = 'flex';
        if (options.includes('FillXY')) {
            layout.style.width = '100%';
            layout.style.height = '100%';
        }
    } else if (type.toLowerCase() === 'card') {
        layout.style.padding = '10px';
        layout.style.borderRadius = '5px';

    } else if (type.toLowerCase() === 'absolute') {
        layout.style.position = 'absolute';
        layout.style.width = '100%';
        layout.style.height = '100%';
    } else if (type.toLowerCase() === 'slide') {
        layout.style.overflow = 'hidden';
    } else if (type.toLowerCase() === 'grid') {
        layout.style.display = 'grid';
        layout.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Change column count as needed
        layout.style.gridGap = '10px';
    }

    if (options.includes('left') || options.includes('Left')) {
        layout.style.justifyContent = 'flex-start';
    }
    if (options.includes('right') || options.includes('Right')) {
        layout.style.justifyContent = 'flex-end';
    }
    if (options.includes('center') || options.includes('Center')) {
        layout.style.justifyContent = 'center';
    }
    if (options.includes('VCenter') || options.includes('vcenter')) {
        layout.style.alignItems = 'center';
    }
    if (options.includes('HCenter') || options.includes('hcenter')) {
        layout.style.justifyContent = 'center';
        layout.style.alignItems = 'center';
    }
    if (options.includes('Bottom') || options.includes('bottom')) {
        layout.style.alignSelf = 'flex-end';
    }
    if (options.includes('Top') || options.includes('top')) {
        layout.style.alignSelf = 'flex-start';
    }
    if (options.includes('FillX')) {
        layout.style.width = '100%';
    }
    if (options.includes('FillY')) {
        layout.style.height = '100%';
    }
    if (options.includes('Horizontal')) {
        layout.style.flexDirection = 'row';
    }
    if (options.includes('Vertical')) {
        layout.style.flexDirection = 'column';
    }
};

ui.render = function() {
    const container = document.getElementById('app-container');
    this.elements.forEach(element => {
        container.appendChild(element);
    });
};

ui.addButton = function(btnName, width, height, classname, parentLay) {
    return new buttonObj(btnName, width, height, classname, parentLay);
}


ui.addText = function(text, width, height, options, classname, parentLay) {
    return new textObject(text, width, height, options, classname, parentLay);
}

ui.addImage = function(source, width, height, options, classname, parentLay){
    return new ImageObject(source,width,height,options,classname,parentLay)
}

ui.addVideo = function(source, width, height, options, classname, parentLay){
    return new videoObject(source, width,height, options, classname,parentLay)
}

ui.addRadio = function(radioName, id, classname, radioGroup, checkState, parentLay){
    return new radioObject(radioName, id, classname, radioGroup, checkState, parentLay);
}

ui.addTextField = function(type,searchHint,width,height,id,classname,parentLay){
    return new textfieldObject(type,searchHint,width,height,id,classname,parentLay);
}

ui.addSwitch = function(width,height,checkState,id,classname,parentLay){
    return new switchObject(width,height,checkState,id,classname,parentLay);
}

ui.addPopUp = function(text,width,height,id,classname,parentLay){
    return new popUpObject(text,width,height,id,classname,parentLay);
}
