
export function radioObject(radioName, id, classname, radioGroup, checkState, parentLay){
    this.element = drawRadio(radioName, id, classname, radioGroup, checkState, parentLay,this);

    this.setOnTouch = function(onTouch){
        this.onTouch = onTouch;
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
function drawRadio(radioName, id, classname, radioGroup, checkState, parentLay, radioObj) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = radioGroup; 
    radio.id = id;
    radio.className = classname;
    radio.checked = checkState;

    if (radioObj instanceof radioObject) {
        radio.addEventListener('click', () => {
            if (radio.onTouch) {
                radioObj.onTouch();
            }
        });
    }

    const radContainer = document.createElement('label');
    radContainer.htmlFor = id;
    radContainer.style.display = 'flex';
    radContainer.style.alignItems = 'center';

    const radName = document.createElement('span');
    radName.textContent = radioName;

    // Append the radio input and label (inside the container)
    radContainer.appendChild(radio);
    radContainer.appendChild(radName);

    // Append the container to the parent layout
    if (parentLay instanceof HTMLElement) {
        parentLay.appendChild(radContainer);
    } else if (parentLay && parentLay.element instanceof HTMLElement) {
        // Extract the HTML element from the layout object
        parentLay.element.appendChild(radContainer);
    } else {
        // If parentLay is not an HTML element or layout object, log an error or handle it appropriately
        console.error('Error: parentLay is not a valid HTML element or layout object');
    }

    return radio;
}
