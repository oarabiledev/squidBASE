import './main.mjs';

export function videoObject(source, width, height, options, classname, parentLay) {
    this.element = drawVideo(source, width, height, options, classname, parentLay, this);

    this.setThumbnail = function (image) {
        this.element.poster = image;
    };
    
    this.animate = function(animation) {
        this.element.classList.add('animate__animated', animation)
    };

    this.setStyle = function(styleObject) {
        for (const prop in styleObject) {
            if (styleObject.hasOwnProperty(prop)) {
                this.element.style[prop] = styleObject[prop];
            }
        }
    };

    this.setSize = function (width, height) {
        this.element.style.width = width;
        this.element.style.height = height;
    };

    this.setMargins = function (left, top, right, bottom) {
        this.element.style.marginLeft = left;
        this.element.style.marginTop = top;
        this.element.style.marginRight = right;
        this.element.style.marginBottom = bottom;
    };

    this.setPosition = function (left, top) {
        this.element.style.left = left;
        this.element.style.top = top;
    };

    this.setVideo = function (source, autoplay = true, loop = true, controls = 'show') {
        this.element.src = source;
        this.element.autoplay = autoplay;
        this.element.loop = loop;
    };

    this.setScale = function(x, y) {
        this.element.style.transform = `scale(${x}, ${y})`
    };

    this.disableElement = function(bool) {
        this.element.disabled = bool;
    };

    this.hideObj = function() {
        this.element.style.display = 'none';
    };

    this.showObj = function() {
        this.element.style.display = 'block';
    };

}

function drawVideo(source, width, height, options, classname, parentLay, obj) {
    const video = document.createElement('video');
    video.style.width = width;
    video.style.height = height;
    video.controls = "show";
    video.src = source;

    if (classname) {
        video.className = classname;
    }


    if (parentLay instanceof HTMLElement) {
        parentLay.appendChild(video);
    } else if (parentLay && parentLay.element instanceof HTMLElement) {
        // Extract the HTML element from the layout object
        parentLay.element.appendChild(video);
    } else {
        // If parentLay is not an HTML element or layout object, log an error or handle it appropriately
        console.error('Error: parentLay is not a valid HTML element or layout object');
    }

    return video;
}
