import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

class PageClassTech extends classTools.PageClass {
    constructor(
        jFetch,
        htmlPageTarget,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        imgTg,
        jsonTransform,
        subnavUpdateStuff,
    ) {        
        super(
            jFetch,
            htmlPageTarget,
            subnavMatchProp,
            subnavTg,
            subnavCurrent,
            imgTg,
            jsonTransform,
            subnavUpdateStuff,
        );        
        this.subnavImgIndex = 0;
        this.mqWidthMatch = window.matchMedia('(min-width: 768px)');
        //this.mqWidthImgSw = undefined;
        this.initTech();
    }
    initTech() {
        this.mqSubnavImgCheck();
        this.eventsListenerTech();
        //this.eventObj['load'] = () => {this.mqImgHandle()};
        //this.eventObj['change'] = () => {this.mqImgHandle()};
    }

    eventsListenerTech() {
        super.eventsListener();
        window.addEventListener('load', this.eventsLoadTech)
        this.mqWidthMatch.addEventListener('change', this.eventsChangeTech);
    }

    eventsLoadTech = (e) => {
        this.mqSubnavImgCheck();
    }
    eventsChangeTech = (e) => {

    }

    mqSubnavImgCheck() {
        //const techImg = document.querySelector('.tech-img');
        this.subnavImgIndex = this.mqWidthMatch.matches? 0: 1;

        //techImg.src = 
    }
}

(() => {
    main.initPage('techonology');
    const jFetch = main.jFetch,
        htmlPageTarget = main.htmlPageTarget,
        subnavMatchProp = 'technology',
        subnavTg = document.querySelectorAll('.subnavbar-tech-element'),
        subnavCurrent = document.querySelector('.snte-current'),
        imgTg = document.querySelector('.tech-img'),
        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.tech-name')},
            {k: 'images', ref: imgTg},
            {k: 'description', ref: document.querySelector('.tech-description')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snte', 'snte-current', 'tech-img-animation']);
    
    new PageClassTech(
        jFetch,
        htmlPageTarget,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        imgTg,
        jsonTransform,
        subnavUpdateStuff
    );
})();