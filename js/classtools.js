import * as common from "./common.js";

export class pageClass {
    constructor(
            jFile,
            htmlPageTarget, 
            subNavTg, 
            subNavCurrent,
            imgTg,
            jsonTransform,
            subNavUpdateStuff
            
        ) {
            this.jFile = jFile;
            this.htmlPageTarget = htmlPageTarget;
            this.subNavTg = subNavTg;
            this.subNavCurrent = subNavCurrent;
            this.imgTg = imgTg;
            this.jsonTransform = jsonTransform;
            this.subNavUpdateStuff = subNavUpdateStuff;
            this.jData = undefined;
            this.init();
    }

    async init() {
        this.jData = await common.getJsonData(this.jFile);
        this.subNavTg.forEach(n => n.addEventListener('click', this));
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
        const subNavInd = common.subNavMatcher(target, this.subNavUpdateStuff.tgClass),
            elemJSON = this.jData[subNavInd];
        
        this.subNavCurrent.classList.remove(this.subNavUpdateStuff.tgCurrentClass);
        target.classList.add(this.subNavUpdateStuff.tgCurrentClass);
        this.subNavCurrent = target;
        this.imgTg.classList.remove(this.subNavUpdateStuff.tgCurrentClass);        
        window.requestAnimationFrame(() => this.imgTg.classList.add(this.subNavUpdateStuff.animationClass));        


        this.jsonTransform.map(jdt => {
            if(jdt.k === 'images') {
                this.destImg.src = elemJSON[jdt.k]['png'];
            } else { 
                jdt.ref.innerText = elemJSON[jdt.k];
            }
        });        
    }
}





/*class Destination {
    constructor() {
        this.jsonData = undefined;
        this.htmlPageTarget = common.getHtmlRef(window);
        this.navDest = document.querySelectorAll('.subnavbar-destination-element');
        this.init();
        this.sndeCurrent = document.querySelector('.snde-current');
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
        const subNavInd = common.subNavMatcher(target, 'snde'),
            elemJSON = this.jsonData[subNavInd];
        
        this.sndeCurrent.classList.remove('snde-current');
        target.classList.add('snde-current');
        this.sndeCurrent = target;
        this.destImg.classList.remove('destination-img-animation');        
        window.requestAnimationFrame(() => this.destImg.classList.add('destination-img-animation'));        


        this.jsonDestTransform.map(jdt => {
            if(jdt.k === 'images') {
                this.destImg.src = elemJSON[jdt.k]['png'];
            } else { 
                jdt.ref.innerText = elemJSON[jdt.k];
            }
        });        
    }
}*/