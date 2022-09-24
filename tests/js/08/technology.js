import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

/*class PageClassTech extends classTools.PageClass {
    constructor(
            jFetch,
            subnavMatchProp,
            subnavTg, 
            subnavCurrent,
            jsonTransform,
            subnavUpdateStuff            
        ) { 
        super(
            jFetch,
            subnavMatchProp,
            subnavTg, 
            subnavCurrent,
            jsonTransform,
            subnavUpdateStuff
            ) 
            this.eventsListener();
        }
    
    eventsListener() {
        super.eventsListener();
        window.addEventListener('load', this.eventsLoadCrew);
        this.mqWidthMatch.addEventListener('change', this.eventsChangeCrew);
    }
    eventsLoadTech = () => {
        this.subnavAppend();
    }
    eventsChange = () => {
        this.subnavAppend();
    }

    subnavAppend() {
        if(this.mqWidthMatch) {
            document.querySelector('.crew-interact-fb-middle-container').append(document.querySelector('.subnavbar'));
        }
    }
}*/

(() => {
    main.initPage('techonology');
    const jFetch = main.jFetch,
        subnavMatchProp = 'technology',
        subnavTg = document.querySelectorAll('.subnavbar-tech-element'),
        subnavCurrent = document.querySelector('.snte-current'),        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.tech-name')},
            {k: 'description', ref: document.querySelector('.tech-description')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snte', 'snte-current', 'tech-img-animation']);
    
    let pct = new classTools.PageClass(
        jFetch,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
    //debugger;
})();