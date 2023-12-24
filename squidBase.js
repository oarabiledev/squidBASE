const ui = {
    elements: []
};

ui.createLayout = function(type, options) {
    const layout = document.createElement('div');
    this.applyLayoutStyle(layout, type, options);
    this.elements.push(layout);
    return layout;
};

ui.applyLayoutStyle = function(layout, type, options) {
    if (type === 'Linear') {
        layout.style.display = 'flex';
        if (options.includes('FillXY')) {
            layout.style.width = '100%';
            layout.style.height = '100%';
        }
    }
    if (options.includes('left')|| options.includes('Left')) {
        layout.style.justifyContent = 'flex-start';
    }
    if (options.includes('right') || options.includes('Right')) {
        layout.style.justifyContent = 'flex-end';
    }
    if (options.includes('center')|| options.includes('Center')) {
        layout.style.justifyContent = 'center';
    }
    if (options.includes('VCenter') || options.includes('vcenter')) {
        layout.style.alignItems = 'center';
    }
    if (options.includes('HCenter') || options.includes('hcenter')) {
        layout.style.justifyContent = 'center';
        layout.style.alignItems = 'center';
    }
    if (options.includes('Bottom')|| options.includes('bottom') ) {
        layout.style.alignSelf = 'flex-end';
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
};

function drawButton(btnName, width, height, classname, parentLayout, btnObj) {
    const button = document.createElement('button');
    button.textContent = btnName;
    if (btnObj instanceof buttonObj) {
        // Apply the button style class for dynamically created buttons
        button.className = classname;
    }
    button.style.width = width + 'px';
    button.style.height = height + 'px';
    button.addEventListener('click', function() {
        if (btnObj.onTouch) {
            btnObj.onTouch();
        }
    });
    parentLayout.appendChild(button);
    return button;
}

