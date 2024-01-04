import { htmlObject } from "./design_core/comp_core/html.mjs";
import { buttonObject } from "./design_core/comp_core/button.mjs";
import { textfieldObject } from "./design_core/comp_core/textfield.mjs";


export function loadScript(scriptDir){
    const script = document.createElement('script');
    script.type = 'module';
    script.src = scriptDir;

    document.head.appendChild(script);
}

export function loadStyle(styleDir){
    const style = document.createElement('link');
    style.type = 'stylesheet';
    style.href = styleDir;
    
    document.head.appendChild(style)
}


export const io = {}

export class Interface{
    constructor(){
        this.elements = [];
    }
    addLayout(type, options, width, height, parentLay){
        return new layoutObj(type, options, width, height, parentLay);
    }
    render(){
        const container = document.getElementById('app-container');
        this.elements.forEach(element =>{
            container.appendChild(element);
        });
    }
    addButton(btnName, width, height, classname, id, parentLay){
        return new buttonObject(btnName, width, height, classname, id, parentLay);
    }
    addTextField(type, searchHint, width, height, id, classname, parentLay) {
        return new textfieldObject(type, searchHint, width, height, id, classname, parentLay);
    }
    addHtmlElement(htmlCode, width, height, id, classname, parentLay){
        return new htmlObject(htmlCode, width, height, id, classname, parentLay)
    }
}

class layoutObj{
    constructor(type, options, width, height, parentLay){
        if(parentLay === 'main'){
            this.element = this.pinMain(type, options, width, height, parentLay);
        }
        else{
            this.element = this.pinLay(type, options, width, height, parentLay);
        }
    }
    animate(animation){
        this.element.classList.add('animate__animated', animation);
    }
    setSize(width, height){
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
    }
    setBackColor(color){
        this.element.style.backgroundColor = color;
    }
    setBackGradient(gradient){
        this.element.style.background = gradient;
    }
    setBackgroundImage(imageDir,options){
        this.element.style.setBackgroundImage = imageDir;
        this.element.style.backgroundSize = options;
    }
    setCornerRadius(radius){
        this.element.style.borderRadius = radius + 'px';
    }
    setOnContextMenu(onContextMenu) {
        if (typeof onContextMenu === 'function') {
            this.element.addEventListener('contextmenu', event => {
                event.preventDefault();
                onContextMenu();
            });
        } else {
            console.error('Error: onContextMenu should be a function');
        }
    }
    setStyle(styleObject) {
        for (const prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                this.element.style[prop] = styleObject[prop];
            }
        }
    }

    setMargins(left, top, right, bottom, mode) {
        this.element.style.marginLeft = left + (mode || 'px');
        this.element.style.marginTop = top + (mode || 'px');
        this.element.style.marginRight = right + (mode || 'px');
        this.element.style.marginBottom = bottom + (mode || 'px');
    }

    setPadding(left, top, right, bottom, mode) {
        this.element.style.paddingLeft = left + (mode || 'px');
        this.element.style.paddingTop = top + (mode || 'px');
        this.element.style.paddingRight = right + (mode || 'px');
        this.element.style.paddingBottom = bottom + (mode || 'px');
    }

    setPosition(left, top, mode) {
        this.element.style.position = 'absolute';
        this.element.style.left = left + (mode || 'px');
        this.element.style.top = top + (mode || 'px');
    }

    setScale(x, y) {
        this.element.style.transform = `scale(${x}, ${y})`;
    }

    removeChild(child) {
        if (child && child.element instanceof HTMLElement) {
            this.element.removeChild(child.element);
        } else {
            console.error('Error: child is not a valid layout object');
        }
    }

    hideObj() {
        this.element.style.display = 'none';
    }

    showObj() {
        this.element.style.display = 'block';
    }

    destroyObj() {
        this.element.remove();
    }
    pinMain(type, options, width, height, parentLay){
        const layout = document.createElement('div');
        io.applyLayoutStyle(layout, type, options);

        layout.style.width = window.innerWidth + 'px';
        layout.style.height = window.innerHeight + 'px';
        
        ui.elements.push(layout)
        return layout;
    }
    pinLay(type, options, width, height, parentLay){
        const layout = document.createElement('div');
        
        io.applyLayoutStyle(layout, type, options);

        layout.style.width = width + 'px';
        layout.style.height = height + 'px';

        if (parentLay instanceof HTMLElement) {
            parentLay.appendChild(layout);
        } else if (parentLay && parentLay.element instanceof HTMLElement) {
            parentLay.element.appendChild(layout);
        } else {
            console.error('Error: parentLay is not a valid HTML element or layout object');
        }

        return layout;
    }
}

export const ui = new Interface();

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
