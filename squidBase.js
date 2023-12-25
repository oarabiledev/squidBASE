function loadInterface(interfaceName) {
    const head = document.head;
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    switch(interfaceName){
        case 'Material Design 3':
            link.href = `md3.css`;
            break;
        case 'Material Design 2':
            link.href = `md2.css`;
    }
    head.appendChild(link);
    
    const jsScript = document.createElement('script');
    jsScript.type = 'text/javascript';
    switch(interfaceName){
        case 'Material Design 3':
            jsScript.src = `md3.js`;
            break;
        case 'Material Design 2':
            jsScript.src = `md2.js`;
    }
    head.appendChild(jsScript);
}


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

ui.addButton = function(btnName, width, height, classname, parentLayout) {
    return new buttonObj(btnName, width, height, classname, parentLayout);
};

function buttonObj(btnName, width, height, classname, parentLayout) {
    this.element = drawButton(btnName, width, height, classname, parentLayout, this);
    this.setMargins = function(left, top, right, bottom) {
        this.element.style.marginTop = top || 0;
        this.element.style.marginRight = right || 0;
        this.element.style.marginBottom = bottom || 0;
        this.element.style.marginLeft = left || 0;
    };
    this.setSize = function(width, height) {
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
    };
    this.setOnTouch = function(onTouch) {
        this.onTouch = onTouch;
    };
    this.disableElement = function (isDisabled) {
        this.element.disabled = isDisabled;
        if (isDisabled) {
            this.element.classList.add('disabled');
        } else {
            this.element.classList.remove('disabled');
        }
    };
    this.setName = function(btnName){
        this.element.textContent = btnName;
    }
    this.setTouchCount = function (count) {
        this.touchCount = count;
    };
    this.getState = function(){
        return this.state.buttonClicked;
    }
    this.getTouchCount = function(){
        return this.touchCount;
    };
    this.setStyle = function (styleObject) {
        for (const prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                this.element.style[prop] = styleObject[prop];
            }
        }
    };
};

function drawButton(btnName, width, height, classname, parentLayout, btnObj) {
    const button = document.createElement('button');
    button.textContent = btnName;
    if (btnObj instanceof buttonObj) {
    btnObj.state = { buttonClicked: false };
    btnObj.touchCount = 0;
    button.className = classname;
}

    button.style.width = width + 'px';
    button.style.height = height + 'px';
    button.addEventListener('click', function() {
        btnObj.state.buttonClicked ^= true;
        btnObj.touchCount++;
        if (btnObj.onTouch) {
            btnObj.onTouch();
        }
    });
    parentLayout.appendChild(button);
    return button;
}
