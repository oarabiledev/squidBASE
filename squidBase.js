class SquidBase {
    constructor() {
        this.elements = [];
    }

    addLayout(type, params) {
        const layout = document.createElement('div');
        this.applyLayoutStyles(layout, type, params);
        this.elements.push(layout);
        return layout;
    }

    addButton(btnName, width, height, parentLayout, margins) {
        const button = new SquidButton(btnName);
        button.setSize(width, height);
        button.setMargins(margins);
        parentLayout.appendChild(button.element);
        return button;
    }

    applyLayoutStyles(layout, type, params) {
        if (type === 'Linear') {
            layout.style.display = 'flex';
            if (params === 'FillXY') {
                layout.style.width = '100%';
                layout.style.height = '100%';
            }
        }
    }

    render(containerId) {
        const container = document.getElementById(containerId);

        if (!container) {
            console.error(`Container with id '${containerId}' not found.`);
            return;
        }

        this.elements.forEach(element => {
            container.appendChild(element);
        });
    }
}

class SquidButton {
    constructor(btnName) {
        this.element = document.createElement('button');
        this.element.textContent = btnName;
    }

    setMargins(margins) {
        if (margins) {
            const { top, right, bottom, left } = margins;
            this.element.style.marginTop = top || 0;
            this.element.style.marginRight = right || 0;
            this.element.style.marginBottom = bottom || 0;
            this.element.style.marginLeft = left || 0;
        }
    }

    setSize(width, height) {
        if (width) {
            this.element.style.width = typeof width === 'number' ? `${width * 100}%` : width;
        }

        if (height) {
            this.element.style.height = typeof height === 'number' ? `${height * 100}%` : height;
        }
    }

    setOnTouch(callback) {
        this.element.addEventListener('click', callback);
    }
}
