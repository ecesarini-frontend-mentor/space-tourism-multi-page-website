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
    }
    eventsLoad = (e) => {
        this.mqSubnavImgCheck();
    }
    eventsClick = (e) => {
        this.subnavUpdater(e.currentTarget);
    }
    mqSubnavImgCheck() {
        this.subnavImgIndex = this.mqWidthMatch.matches? 1: 0;
    }
    subnavImgTransformer(ref) {
        const jsonToPage = this.htmlPageTarget.split('.')[0],
            jsonTgObj = this.jData[jsonToPage][ref]['images'],
            jsonTgInd = Object.keys(jsonTgObj)[this.subnavImgIndex];

        this.imgTg.src = jsonTgObj[jsonTgInd];
        //this.imgTg.src = jsonTgInd(Object.keys(jsonTgInd)[this.subnavImgIndex]);
        //this.imgTg.src = this.jData[jsonTg][ref][this.subnavImgIndex];
    }



    subnavUpdater(target) {
        const subnavInd = common.subnavMatcher(target, this.subnavUpdateStuff.tgClass),
            elemJSON = this.jData[this.subnavMatchProp][subnavInd];

        this.imgTg.src = this.subnavImgTransformer(subnavInd);

        this.subnavCurrent.classList.remove(this.subnavUpdateStuff.tgCurrentClass);
        target.classList.add(this.subnavUpdateStuff.tgCurrentClass);
        this.subnavCurrent = target;
        this.imgTg.classList.remove(this.subnavUpdateStuff.animationClass);        
        window.requestAnimationFrame(() => this.imgTg.classList.add(this.subnavUpdateStuff.animationClass));        


        this.jsonTransform.forEach((jdt) => { //, jInd) => {
            if(jdt.k !== 'images') {
                //const jdtImgRef = Object.keys(elemJSON[jdt.k])[this.subnavImgIndex];
                //this.imgTg.src = elemJSON[jdt.k][jdtImgRef];
                //this.subnavImgTransformer(jInd);
            //} else { 
                jdt.ref.innerText = elemJSON[jdt.k];
            }
        });        
    }
}