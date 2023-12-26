const ui = {
    elements: [],
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
};


ui.createLayout = function (type, options) {
    const layout = document.createElement('div');
    this.applyLayoutStyle(layout, type, options);
    this.elements.push(layout);
    return layout;
};

ui.applyLayoutStyle = function (layout, type, options) {
    if (type.toLowerCase() === 'linear') {
        layout.style.display = 'flex';
        if (options.includes('FillXY')) {
            layout.style.width = '100%';
            layout.style.height = '100%';
        }
    } else if (type.toLowerCase() === 'card') {
        layout.style.border = '1px solid #ccc';
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

ui.setSize = function (layout, width, height) {
    layout.style.width = `${this.rationalizeSize(width) * 100}%`;
    layout.style.height = `${this.rationalizeSize(height) * 100}%`;
};

ui.setBackColor = function (layout, color) {
    layout.style.backgroundColor = color;
};

ui.setBackgroundImage = function (layout, imageUrl) {
    layout.style.backgroundImage = `url('${imageUrl}')`;
    layout.style.backgroundSize = 'cover';
};

ui.setMargin = function (layout, left, top, right, bottom) {
    layout.style.marginLeft = `${this.rationalizeSize(left) * 100}%`;
    layout.style.marginTop = `${this.rationalizeSize(top) * 100}%`;
    layout.style.marginRight = `${this.rationalizeSize(right) * 100}%`;
    layout.style.marginBottom = `${this.rationalizeSize(bottom) * 100}%`;
};

ui.setCornerRadius = function (layout, radius) {
    layout.style.borderRadius = radius;
};

ui.setChildMargins = function (layout, left, top, right, bottom) {
    const children = layout.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        this.setMargin(child, left, top, right, bottom);
    }
};

ui.render = function() {
    const container = document.getElementById('app-container');
    this.elements.forEach(element => {
        container.appendChild(element);
    });
};
ui.addFilledButton = function(btnName, width, height, iconClass, parentLayout) {
    return new filledButtonObj(btnName, width, height, iconClass, parentLayout);
};

function filledButtonObj(btnName, width, height, iconClass, parentLayout) {
    this.element = drawFilledButton(btnName, width, height, iconClass, parentLayout, this);

    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    };

    this.setSize = function(width, height) {
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
    };

    this.setText = function(buttonName) {
        this.element.textContent = buttonName;
    };

    this.setMargins = function(left, top, right, bottom) {
        this.element.style.marginLeft = left + 'px';
        this.element.style.marginTop = top + 'px';
        this.element.style.marginRight = right + 'px';
        this.element.style.marginBottom = bottom + 'px';
    };
    this.disableElement = function(bool){
        this.element.disabled = bool;
    }
    this.setToolTip = function(text, alignment) {
        //To be added
    };
}

function drawFilledButton(btnName, width, height, iconClass, parentLayout, btnObj) {
    const button = document.createElement('button');
    button.style.width = width + 'px';
    button.style.height = height + 'px';
    
    if (btnObj instanceof filledButtonObj) {
    btnObj.state = { buttonClicked: false };
    btnObj.touchCount = 0;
    button.classList.add('button', 'button-filled');
    }

    // Add button text
    const buttonText = document.createElement('span');
    buttonText.textContent = btnName;
    button.appendChild(buttonText);

    button.addEventListener('click', function() {
        if (btnObj.onTouch) {
            btnObj.onTouch();
        }
    });

    parentLayout.appendChild(button);
    return button;
}

ui.addOutlinedButton = function(btnName, width, height, iconClass, parentLayout){
    return new outlineButtonObj(btnName, width, height, iconClass, parentLayout)
}

function outlineButtonObj(btnName, width, height, iconClass, parentLayout){
    this.element = drawOutlinedButton(btnName, width, height, iconClass, parentLayout, this);

    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    };
   
    this.setSize = function(width, height) {
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
    };

    this.setText = function(buttonName) {
        this.element.textContent = buttonName;
    };

    this.setMargins = function(left, top, right, bottom) {
        this.element.style.marginLeft = left + 'px';
        this.element.style.marginTop = top + 'px';
        this.element.style.marginRight = right + 'px';
        this.element.style.marginBottom = bottom + 'px';
    };
    this.disableElement = function(bool){
        this.element.disabled = bool;
    }
    this.setToolTip = function(text, alignment) {
        
    };
}
    
function drawOutlinedButton(btnName, width, height, iconClass, parentLayout, btnObj){
    const button = document.createElement('button')
    button.style.width = width;
    button.style.height = height;
    button.textContent = btnName;
    
    if (btnObj instanceof outlineButtonObj) {
    btnObj.state = { buttonClicked: false };
    btnObj.touchCount = 0;
    button.classList.add('button', 'button-outlined');
    }
    
    button.addEventListener('click', function() {
        if (btnObj.onTouch) {
            btnObj.onTouch();
        }
    });

    parentLayout.appendChild(button);
    return button;
}
    
    
