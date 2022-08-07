import * as common from "./common.js";

class Destination {
    constructor() {
        this.jsonData = undefined;
        this.htmlPageTarget = common.getHtmlRef(window);
        this.navDest = document.querySelectorAll('.navbar-destination-element');
        this.init();
        this.ndeCurrent = document.querySelector('.nde-current');
        this.jsonDestTransform = [
            {k: 'name', ref: document.querySelector('.destination-title')},
            {k: 'images', ref: document.querySelector('.destination-img-bg')},
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

        this.jsonDestTransform.map((jdt, ind) => {
            //debugger;
            if(jdt.k === 'images') jdt.src = elemJSON[ind][jdt.k]['png'];
            else jdt.innerText =  elemJSON[ind][jdt.k];
        });
    }

}

new Destination();

