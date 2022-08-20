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
            //this.jFile = jFile;
            this.jFetch = jFetch;
            this.htmlPageTarget = htmlPageTarget;
            this.subNavMatchProp = subNavMatchProp;
            this.subNavTg = subNavTg;
            this.subNavCurrent = subNavCurrent;
            this.imgTg = imgTg;
            this.jsonTransform = jsonTransform;
            this.subNavUpdateStuff = subNavUpdateStuff;
            
            this.jData = undefined;
            this.init();
    }
    
    
    async init() {
        this.jData = await this.jFetch;
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
}