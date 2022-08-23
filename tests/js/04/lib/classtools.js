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
            
            this.eHJob = this.eventsHandlerJob();
            this.eHDo = undefined;

            this.e = undefined;
            this.jData = undefined;
            this.init();
    }
    async init() {
        this.jData = await this.jFetch;
        this.eventsListener();
    }
    
    eventsListener() {
        this.subNavTg.forEach(n => n.addEventListener('click', this));
    }
    eventsHandlerJob() {
        return {
            click: (target) => {
                this.subNavUpdater(target);//.bind(this);
            }
        };
    }
    eventsHandlerDo(e) {
        const eO = {
            click: this.eHJob[e.type][e.currentTarget]
        };
        this.eHDo = eO;
    }

    handleEvent(e) {
        //this.e = e;
        this.eventsHandlerDo(e);
        this.eHJob = this.eventsHandlerJob();
        const ect = e.currentTarget,
            //hEObj = this.eventsHandlerDo(e);
            hEDo = this.eHDo;

        for(let prop in hEDo) {
            if(e.type === prop) {
                this.eHJ[prop];
            }
        }
        //this.e = undefined;
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