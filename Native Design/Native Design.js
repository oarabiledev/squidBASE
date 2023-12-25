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

ui.addLayout = function(type,options,width,height,parentLay){
    return new layoutObj(type,options,width,height,parentLay)
}

function layoutObj(type,options,width,height,parentLay){
    if(parentLay === 'main'){
        this.element = pinMainLay(type,options,width,height,parentLay,this);
    }
    else{
        this.element = addLayout(type,options,width,height,parentLay,this);
    }
    
    this.setSize = function(width,height,mode){
        this.element.style.width = width + mode;
        this.element.style.height = height + mode;
    }
    this.setBackColor = function(color){
        this.element.style.backgroundColor = color;
    }
    this.setBackground = function(imgDir){
        this.element.style.backgroundImage = imgDir;
        this.element.style.backgroundSize = 'cover';
    }
    this.setCornerRadius = function(radius,mode){
        this.element.style.borderRadius = radius + mode;
    }
    this.setOnContextMenu = function(onContextMenu){
        
    }
    this.setOnTouch = function(onTouch){
        this.onTouch = onTouch;
    }
    this.setMargins = function(left,top,right,bottom,mode){
        this.element.style.marginLeft = left + (mode || 'px');
        this.element.style.marginTop = top + (mode || 'px');
        this.element.style.marginRight = right + (mode || 'px');
        this.element.style.marginBottom = bottom + (mode || 'px');
    }
    this.setPadding = function(left,top,right,bottom,mode){
        
    }
    this.setPosition = function(left,top,mode){
        
    }
    this.setScale = function(x, y){
        
    }
    this.removeChild = function(child){
        
    }
    this.hideObj = function(){
        
    }
    this.showObj = function(){
        
    }
    this.destroyObj = function(){
        
    }
}

function pinMainLay(type,options,width,height,parentLay,mainObj){
    
    
    const layout = document.createElement('div');
    io.applyLayoutStyle(layout, type, options);
    
    layout.style.width = screenWidth +'px';
    layout.style.height = screenHeight +'px';
    
    ui.elements.push(layout);
    
    return layout;
}

function addLayout(type, options, width, height, parentLay, layObj) {
    const layout = document.createElement('div');
    io.applyLayoutStyle(layout, type, options);

    layout.style.width = width;
    layout.style.height = height;

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

ui.render = function() {
    const container = document.getElementById('app-container');
    this.elements.forEach(element => {
        container.appendChild(element);
    });
};
