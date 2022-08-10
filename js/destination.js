import * as common from "./common.js";

class Destination {
    constructor() {
        this.jsonData = undefined;
        this.htmlPageTarget = common.getHtmlRef(window);
        this.navDest = document.querySelectorAll('.navbar-destination-element');
        this.init();
        this.ndeCurrent = document.querySelector('.nde-current');
        this.destImg = document.querySelector('.destination-img');
        this.jsonDestTransform = [
            {k: 'name', ref: document.querySelector('.destination-title')},
            {k: 'images', ref: this.destImg},
            {k: 'description', ref: document.querySelector('.destination-description')},
            {k: 'distance', ref: document.querySelector('.destination-distance')},
            {k: 'travel', ref: document.querySelector('.destination-travel')}
        ];
    }

    async init() {
        this.jsonData = await common.initJSON("../data.json", 'destinations');
        this.navDest.forEach(n => n.addEventListener('click', this));
    }
    handleEvent(e) {
        const ect = e.currentTarget;

        switch(e.type) {
            case 'click':
                this.subNavUpdater(ect);
                break;
        }
    }
 
    subNavUpdater(target) {
        const subNavInd = common.subNavMatcher(target, 'nde'),
            elemJSON = this.jsonData[subNavInd];
        
        this.ndeCurrent.classList.remove('nde-current');
        target.classList.add('nde-current');
        this.ndeCurrent = target;
        this.destImg.classList.remove('destination-img-animation');        
        window.requestAnimationFrame(() => this.destImg.classList.add('destination-img-animation'));        


        this.jsonDestTransform.map(jdt => {
            if(jdt.k === 'images') {
                //jdt.ref.src = elemJSON[jdt.k]['png'];
                this.destImg.src = elemJSON[jdt.k]['png'];
            } else { 
                jdt.ref.innerText =  elemJSON[jdt.k];
            }
        });        
        //this.destImg.classList.remove('destination-img-animation');
    }

}

new Destination();

