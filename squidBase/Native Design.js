const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


//io For Internal Functions
const io = {}


const ui = {
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

function buttonObj(btnName, width, height, classname, parentLay) {
    this.element = drawButton(btnName, width, height, classname, parentLay, this);

    this.animate = function(animation) {
        this.element.classList.add('animate__animated', animation)
    }
    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch();
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

ui.addText = function(text, width, height, options, classname, parentLay) {
    return new textObject(text, width, height, options, classname, parentLay);
}

function textObject(text, width, height, options, classname, parentLay) {
    this.element = drawText(text, width, height, options, classname, parentLay, this);

    this.animate = function(animation) {
        this.element.classList.add('animate__animated', animation)
    }
    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    }
    this.setText = function(text) {
        this.element.textContent = text;
    }
    this.setFontFile = function(file) {
        const style = document.createElement('style');

        // Define the @font-face rule
        style.textContent = `
            @font-face {
                font-family: 'CustomFont';
                src: url('${file}') format('truetype');
            }
        `;

        // Append the style element to the head
        document.head.appendChild(style);

        // Apply the font-family to the element
        this.element.style.fontFamily = 'CustomFont';
    };
    
    this.setBackColorGradient = function(gradient) {
        this.element.style.background = gradient;
    }
    this.setBackColor = function(color) {
        this.element.style.backgroundColor = color;
    }
    this.setTextColor = function(color) {
        this.element.style.color = color;
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

function drawText(text, width, height, options, classname, parentLay, textObj) {
    const Text = document.createElement('text');
    Text.textContent = text;
    Text.className = classname || '';
    Text.style.width = width + 'px';
    Text.style.height = height + 'px';

    Text.addEventListener('click', () => {
        if (textObj.onTouch) {
            textObj.onTouch();
        } else {
            return null;
        }
    })

    let props = options;
    io.applyTextOptions(Text, props);

    if (parentLay instanceof HTMLElement) {
        parentLay.appendChild(Text);
    } else if (parentLay && parentLay.element instanceof HTMLElement) {
        // Extract the HTML element from the layout object
        parentLay.element.appendChild(Text);
    } else {
        // If parentLay is not an HTML element or layout object, log an error or handle it appropriately
        console.error('Error: parentLay is not a valid HTML element or layout object');
    }
    return Text;

}

/* All Options
   h1,h2,h3,h4,h5,h6,body1,body2,overline,subtititle1,button,caption,singleline,multiline,left,center,right,justify,italisize,monospace,bold,underline*/
io.applyTextOptions = function(element, options) {
    const optionList = options.toLowerCase().split(',');

    optionList.forEach(option => {
        switch (option.trim()) {
            case 'h1':
                element.style.fontSize = '2em';
                element.style.fontWeight = 'bold';
                break;
            case 'h2':
                element.style.fontSize = '1.5em';
                element.style.fontWeight = 'bold';
                break;
            case 'h3':
                element.style.fontSize = '1.17em';
                element.style.fontWeight = 'bold';
                break;
            case 'h4':
                element.style.fontSize = '1em';
                element.style.fontWeight = 'bold';
                break;
            case 'h5':
                element.style.fontSize = '0.83em';
                element.style.fontWeight = 'bold';
                break;
            case 'h6':
                element.style.fontSize = '0.67em';
                element.style.fontWeight = 'bold';
                break;
            case 'body1':
                element.style.fontSize = '1em';
                break;
            case 'body2':
                element.style.fontSize = '0.83em';
                break;
            case 'overline':
                element.style.textTransform = 'uppercase';
                break;
            case 'subtitle1':
                element.style.fontSize = '1em';
                break;
            case 'button':
                element.style.fontSize = '0.83em';
                element.style.fontWeight = 'bold';
                element.style.cursor = 'pointer';
                element.style.display = 'inline-block';
                element.style.padding = '8px 16px';
                element.style.textAlign = 'center';
                element.style.textDecoration = 'none';
                element.style.border = '1px solid #ccc';
                element.style.borderRadius = '4px';
                break;
            case 'caption':
                element.style.fontSize = '0.67em';
                break;
            case 'singleline':
                element.style.whiteSpace = 'nowrap';
                break;
            case 'multiline':
                element.style.whiteSpace = 'normal';
                break;
            case 'left':
                element.style.textAlign = 'left';
                break;
            case 'center':
                element.style.textAlign = 'center';
                break;
            case 'right':
                element.style.textAlign = 'right';
                break;
            case 'justify':
                element.style.textAlign = 'justify';
                break;
            case 'italicize':
                element.style.fontStyle = 'italic';
                break;
            case 'monospace':
                element.style.fontFamily = 'monospace';
                break;
            case 'bold':
                element.style.fontWeight = 'bold';
                break;
            case 'underline':
                element.style.textDecoration = 'underline';
                break;
            default:
                break;
        }
    });
}
