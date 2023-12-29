import {io} from './main.mjs'
export function textObject(text, width, height, options, classname, parentLay) {
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
    applyTextOptions(Text, props);

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
function applyTextOptions(element, options) {
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
