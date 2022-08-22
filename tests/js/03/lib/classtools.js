import * as common from "./common.js";

export class PageClass {
    constructor(
            jFetch,
            htmlPageTarget,
            subNavMatchProp,
            subNavTg, 
            subNavCurrent,
            imgTg,
            jsonTransform,
            subNavUpdateStuff            
        ) {
            this.jFetch = jFetch;
            this.htmlPageTarget = htmlPageTarget;
            this.subNavMatchProp = subNavMatchProp;
            this.subNavTg = subNavTg;
            this.subNavCurrent = subNavCurrent;
            this.imgTg = imgTg;
            this.jsonTransform = jsonTransform;
            this.subNavUpdateStuff = subNavUpdateStuff;            

            this.jData = undefined;
            this.eventObj = undefined;
            this.init();
    }
    async init() {
        this.jData = await this.jFetch;
        this.eventsListener();
    }
    eventsListener() {
        window.addEventListener('load', this);
        this.subNavTg.forEach(n => n.addEventListener('click', this));
    }
    objEventsHandler() {
        let o = {
            click: (target) => {
                this.subNavUpdater(target);
            },
            load: () => {},
            change: () => {}
        };
        return o;
    } 

    handleEvent(e) {
        const ect = e.currentTarget;

        switch(e.type) {
            case 'click':
                this.objEventsHandler()[e.type](ect);
                break;
            case 'load':
                //this.mqImgHandle();
                //this.eventsListener();
                break;
            case 'change':
                //this.mqImgHandle();
                //this.eventsListener();
                break;
        }
    }
    subNavUpdater(target) {
        const subNavInd = common.subNavMatcher(target, this.subNavUpdateStuff.tgClass),
            elemJSON = this.jData[this.subNavMatchProp][subNavInd];
        
        this.subNavCurrent.classList.remove(this.subNavUpdateStuff.tgCurrentClass);
        target.classList.add(this.subNavUpdateStuff.tgCurrentClass);
        this.subNavCurrent = target;
        this.imgTg.classList.remove(this.subNavUpdateStuff.animationClass);        
        window.requestAnimationFrame(() => this.imgTg.classList.add(this.subNavUpdateStuff.animationClass));        


        this.jsonTransform.map(jdt => {
            if(jdt.k === 'images') {
                const jdtImgRef = Object.keys(elemJSON[jdt.k])[0];
                this.imgTg.src = elemJSON[jdt.k][jdtImgRef];
            } else { 
                jdt.ref.innerText = elemJSON[jdt.k];
            }
        });        
    }
    /*mqImgHandle() {
        this.mqWidthImgSw = this.mqWidthMatch.matches? 0: 1;
    }*/
}