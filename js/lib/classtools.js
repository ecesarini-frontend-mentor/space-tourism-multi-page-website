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

            this.subnavInd = 1;
            this.subnavImgIndex = undefined;
            this.mqWidthMatch = window.matchMedia('(max-width: 768px)');
            this.jData = undefined;
            this.init();
    }

    async init() {
        this.jData = await this.jFetch;
        this.eventsListener();
    }
    
    eventsListener() {
        window.addEventListener('load', this.eventsLoad);
        this.subnavTg.forEach(n => n.addEventListener('click', this.eventsClick));
        this.mqWidthMatch.addEventListener('change', this.eventsChange);
    }
    eventsLoad = (e) => {
        this.mqSubnavImgCheck();
    }
    eventsClick = (e) => {
        this.subnavUpdater(e.currentTarget);
    }
    eventsChange = (e) => {
        this.mqSubnavImgCheck();
        this.imgTg.src =this.subnavGetImgSrc(this.subnavInd);
    }

    mqSubnavImgCheck() {
        this.subnavImgIndex = this.mqWidthMatch.matches? 1: 0;
    }
    subnavGetImgSrc(ind) {
        let src = undefined;
        const jsonToPage = this.htmlPageTarget.split('.')[0],
            jsonTgObj = this.jData[jsonToPage][ind]['images'],
            jsonTgInd = Object.keys(jsonTgObj)[this.subnavImgIndex];

        return src = jsonTgObj[jsonTgInd];
    }

    subnavUpdater(target) {
        this.subnavInd = common.subnavMatcher(target, this.subnavUpdateStuff.tgClass);
        this.imgTg.src = this.subnavGetImgSrc(this.subnavInd);
        
        const elemJSON = this.jData[this.subnavMatchProp][this.subnavInd];

        this.subnavCurrent.classList.remove(this.subnavUpdateStuff.tgCurrentClass);
        target.classList.add(this.subnavUpdateStuff.tgCurrentClass);
        this.subnavCurrent = target;
        this.imgTg.classList.remove(this.subnavUpdateStuff.animationClass);        
        window.requestAnimationFrame(() => this.imgTg.classList.add(this.subnavUpdateStuff.animationClass));        


        this.jsonTransform.forEach((jdt) => { //, jInd) => {
            if(jdt.k !== 'images') {
                jdt.ref.innerText = elemJSON[jdt.k];
            }
        });        
    }
}