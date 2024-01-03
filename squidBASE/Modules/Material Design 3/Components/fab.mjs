import '../main.mjs';
import '../Design_Core/beer.js';
import '../Design_Core/beer dynamic.js';

export class fabObject{
    constructor(type, icon ,parentLay){
        switch (type){
            case 'small':
                this.drawSmallFAB(type, icon, parentLay, this);
                break;
            case 'medium':
                this.drawMediumFAB(type, icon, parentLay, this);
                break;
            case 'large':
                this.drawLargeFAB(type, icon, parentLay, this);
                break;
            case 'extra':
                this.drawExtraFAB(type, icon, parentLay, this);
        }
        this.setOnTouch = function(onTouch){
            this.onTouch = onTouch;
        }

        this.animate = function(animation) {
            this.element.classList.add('animate__animated', animation)
        }

        this.setOnFocus = function (onFocus) {
            this.onFocus = onFocus;
        }

        this.setMargins = function (left, top, right, bottom) {
            this.element.style.marginLeft = left + 'px';
            this.element.style.marginTop = top + 'px';
            this.element.style.marginRight = right + 'px';
            this.element.style.marginBottom = bottom + 'px';
        }

        this.setPosition = function (left, top, mode) {
            this.element.style.position = 'absolute';
            this.element.style.left = left + (mode || 'px');
            this.element.style.top = top + (mode || 'px');
        }

        this.setScale = function (x, y) {
            this.element.style.transform = `scale(${x}, ${y})`
        }

        this.disableElement = function (bool) {
            this.element.disabled = bool;
        }

        this.hideObj = function () {
            this.element.style.display = 'none';
        }

        this.showObj = function () {
            this.element.style.display = 'block';
        }
    }
    drawSmallFAB(type, icon, parentLay, sFabObj){
        const fab = document.createElement('button');
        fab.className = 'circle small';

        const iconSymbol = document.createElement('i');
        iconSymbol.textContent = icon;
        fab.appendChild(iconSymbol);

        fab.addEventListener('click',()=>{
            if(sFabObj.onTouch){
                sFabObj.onTouch();
            }
        });

        if(parentLay && parentLay.element instanceof HTMLElement){
            parentLay.element.appendChild(fab)
        }
    }
    drawMediumFAB(type, icon, parentLay, mFabObj){
        
    }
    drawLargeFAB(type, icon, parentLay, lFabObj){
        
    }
    drawExtraFAB(type, icon, parentLay, eFabObj){
        
    }
}
