import * as common from "./common.js";

export class PageClass {
    constructor(
            jFetch,
            htmlPageTarget,
            subnavMatchProp,
            subnavTg, 
            subnavCurrent,
            imgTg,
            jsonTransform,
            subnavUpdateStuff            
        ) {
            this.jFetch = jFetch;
            this.htmlPageTarget = htmlPageTarget;
            this.subnavMatchProp = subnavMatchProp;
            this.subnavTg = subnavTg;
            this.subnavCurrent = subnavCurrent;
            this.imgTg = imgTg;
            this.jsonTransform = jsonTransform;
            this.subnavUpdateStuff = subnavUpdateStuff;
            
            this.jData = undefined;
            this.init();
    }

    subnavImgIndex

    async init() {
        this.jData = await this.jFetch;
        this.eventsListener();
    }
    
    eventsListener() {
        this.subnavTg.forEach(n => n.addEventListener('click', this.eventsClick));
    }
    eventsClick = (e) => {
        this.subnavUpdater(e.currentTarget);
    }


    subnavUpdater(target) {
        const subnavInd = common.subnavMatcher(target, this.subnavUpdateStuff.tgClass),
            elemJSON = this.jData[this.subnavMatchProp][subnavInd];
        
        this.subnavCurrent.classList.remove(this.subnavUpdateStuff.tgCurrentClass);
        target.classList.add(this.subnavUpdateStuff.tgCurrentClass);
        this.subnavCurrent = target;
        this.imgTg.classList.remove(this.subnavUpdateStuff.animationClass);        
        window.requestAnimationFrame(() => this.imgTg.classList.add(this.subnavUpdateStuff.animationClass));        


        this.jsonTransform.map(jdt => {
            if(jdt.k === 'images') {
                const jdtImgRef = Object.keys(elemJSON[jdt.k])[this.subnavImgIndex];
                this.imgTg.src = elemJSON[jdt.k][jdtImgRef];
            } else { 
                jdt.ref.innerText = elemJSON[jdt.k];
            }
        });        
    }
}