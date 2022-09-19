import * as common from "./common.js";

export class PageClass {
    imgPage = document.querySelector('.img-page');
    subnavInd = 0;
    subnavImgIndex = undefined;
    mqWidthMatch = window.matchMedia('(max-width: 768px)');
    jData = undefined;
    constructor(
            jFetch,
            subnavMatchProp,
            subnavTg, 
            subnavCurrent,
            jsonTransform,
            subnavUpdateStuff            
        ) {
            this.jFetch = jFetch;
            this.subnavMatchProp = subnavMatchProp;
            this.subnavTg = subnavTg;
            this.subnavCurrent = subnavCurrent;
            this.jsonTransform = jsonTransform;
            this.subnavUpdateStuff = subnavUpdateStuff;

            this.init();
    }

    async init() {
        this.jData = await this.jFetch;
        this.jData = await this.jData[this.subnavMatchProp];
        this.eventsListener();
    }
    
    eventsListener() {
        window.addEventListener('load', this.eventsLoad);
        this.subnavTg.forEach(n => n.addEventListener('click', this.eventsClick));
        this.mqWidthMatch.addEventListener('change', this.eventsChange);
    }
    eventsLoad = () => {
        this.mqSubnavImgCheck();
        this.imgPage.src = this.subnavGetImgSrc(this.subnavInd);
    }
    eventsClick = (e) => {
        this.subnavUpdater(e.currentTarget);
    }
    eventsChange = () => {
        this.mqSubnavImgCheck();
        this.imgPage.src = this.subnavGetImgSrc(this.subnavInd);
    }

    mqSubnavImgCheck() {
        this.subnavImgIndex = this.mqWidthMatch.matches? 1: 0;
    }
    subnavGetImgSrc(ind) {
        let src = undefined;
        const jsonTgObj = this.jData[ind]['images'],
            jsonTgInd = Object.keys(jsonTgObj)[this.subnavImgIndex];

        src = jsonTgObj[jsonTgInd];
        return src;
    }

    subnavUpdater(target) {
        this.mqSubnavImgCheck();
        this.subnavInd = common.subnavMatcher(target, this.subnavUpdateStuff.tgClass);
        this.imgPage.src = this.subnavGetImgSrc(this.subnavInd);
        
        const elemJSON = this.jData[this.subnavInd];

        this.subnavCurrent.classList.remove(this.subnavUpdateStuff.tgCurrentClass);
        target.classList.add(this.subnavUpdateStuff.tgCurrentClass);
        this.subnavCurrent = target;
        this.imgPage.classList.remove(this.subnavUpdateStuff.animationClass);        
        window.requestAnimationFrame(() => this.imgPage.classList.add(this.subnavUpdateStuff.animationClass));        

        this.jsonTransform.forEach((jdt) => { 
            jdt.ref.innerText = elemJSON[jdt.k];
        });
    }
}