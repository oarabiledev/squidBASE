
const ui = {
    elements: []
};

ui.createLayout = function(type, options) {
    const layout = document.createElement('div');
    this.applyLayoutStyle(layout, type, options);
    this.elements.push(layout);
    return layout;
};

ui.applyLayoutStyle = function (layout, type, options) {
    if (type === 'Linear') {
        layout.style.display = 'flex';
        if (options.FillXY) {
            layout.style.width = '100%';
            layout.style.height = '100%';
        }
        if (options.includes('left') || options.Left) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.right || options.Right) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.center || options.Center) {
            layout.style.justifyContent = 'center';
        }
        if (options.VCenter || options.vcenter) {
            layout.style.alignItems = 'center';
        }
        if (options.HCenter || options.hcenter) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.bottom || options.Bottom) {
            layout.style.alignSelf = 'flex-end';
        }
    } else if (type === 'Absolute' || type === 'Card' || type === 'Frame') {
        layout.style.position = 'absolute';
        layout.style.left = options.left || '0';
        layout.style.top = options.top || '0';
        layout.style.width = options.width || '100%';
        layout.style.height = options.height || '100%';
        if (options.left || options.Left) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.right || options.Right) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.center || options.Center) {
            layout.style.justifyContent = 'center';
        }
        if (options.VCenter || options.vcenter) {
            layout.style.alignItems = 'center';
        }
        if (options.HCenter || options.hcenter) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.bottom || options.Bottom) {
            layout.style.alignSelf = 'flex-end';
        }
    } else if (type === 'Grid') {
        layout.style.display = 'grid';
        layout.style.gridTemplateColumns = options.columns || '1fr 1fr';
        layout.style.gridTemplateRows = options.rows || 'auto';
        layout.style.gap = options.gap || '10px';
        if (options.columnGap) {
            layout.style.gridColumnGap = options.columnGap;
        }
        if (options.rowGap) {
            layout.style.gridRowGap = options.rowGap;
        }
        if (options.column) {
            layout.style.gridColumn = options.column;
        }
        if (options.row) {
            layout.style.gridRow = options.row;
        }
        if (options.left || options.Left) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.right || options.Right) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.center || options.Center) {
            layout.style.justifyContent = 'center';
        }
        if (options.VCenter || options.vcenter) {
            layout.style.alignItems = 'center';
        }
        if (options.HCenter || options.hcenter) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.bottom || options.Bottom) {
            layout.style.alignSelf = 'flex-end';
        }
    } else if (type === 'Flex') {
        layout.style.display = 'flex';
        layout.style.flexDirection = options.direction || 'row';
        layout.style.alignItems = options.alignItems || 'stretch';
        layout.style.justifyContent = options.justifyContent || 'flex-start';
        if (options.flexWrap) {
            layout.style.flexWrap = options.flexWrap;
        }
        if (options.alignContent) {
            layout.style.alignContent = options.alignContent;
        }
        if (options.left || options.Left) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.right || options.Right) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.center || options.Center) {
            layout.style.justifyContent = 'center';
        }
        if (options.VCenter || options.vcenter) {
            layout.style.alignItems = 'center';
        }
        if (options.HCenter || options.hcenter) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.bottom || options.Bottom) {
            layout.style.alignSelf = 'flex-end';
        }
    }
    else if (type === 'Card') {
        layout.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        layout.style.borderRadius = '8px';
        layout.style.padding = options.padding || '16px';
        layout.style.margin = options.margin || '0';
        if (options.left || options.Left) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.right || options.Right) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.center || options.Center) {
            layout.style.justifyContent = 'center';
        }
        if (options.VCenter || options.vcenter) {
            layout.style.alignItems = 'center';
        }
        if (options.HCenter || options.hcenter) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.bottom || options.Bottom) {
            layout.style.alignSelf = 'flex-end';
        }
    } else if (type === 'Frame') {
        layout.style.border = options.border || '1px solid #ccc';
        layout.style.borderRadius = options.borderRadius || '4px';
        layout.style.padding = options.padding || '16px';
        if (options.left || options.Left) {
            layout.style.justifyContent = 'flex-start';
        }
        if (options.right || options.Right) {
            layout.style.justifyContent = 'flex-end';
        }
        if (options.center || options.Center) {
            layout.style.justifyContent = 'center';
        }
        if (options.VCenter || options.vcenter) {
            layout.style.alignItems = 'center';
        }
        if (options.HCenter || options.hcenter) {
            layout.style.justifyContent = 'center';
            layout.style.alignItems = 'center';
        }
        if (options.bottom || options.Bottom) {
            layout.style.alignSelf = 'flex-end';
        }
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
    this.setOnMouseEnter = function(onMouseEnter){
        this.onMouseEnter = onMouseEnter;
    }
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
    
    button.addEventListener('mouseenter', function() {
        if (btnObj.onMouseEnter) {
            btnObj.onMouseEnter();
        }
    });
    parentLayout.appendChild(button);
    return button;
}
    
    
