import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

class PageClassCrew extends classTools.PageClass {
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
            subnavUpdateStuff,
            ) 
        }
    subnavAppend() {
        if(this.mqWidthMatch) document.querySelector('.crew-interact-fb-middle-container').append(document.querySelector('.subnavbar'));
    }
    eventsLoad = (e) => {
        super.eventsLoad();
        this.subnavAppend();
    }
    eventsChange = (e) => {
        super.eventsChange();
        this.subnavAppend();
    }
}

(() => {
    main.initPage('crew');
    const jFetch = main.jFetch,
        subnavMatchProp = 'crew',
        subnavTg = document.querySelectorAll('.subnavbar-crew-element'),
        subnavCurrent = document.querySelector('.snce-current'), 
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.crew-name')},
            {k: 'role', ref: document.querySelector('.crew-role')},
            {k: 'bio', ref: document.querySelector('.crew-bio')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snce', 'snce-current', 'crew-img-animation']);

    //new classTools.PageClass(
    new PageClassCrew(
        jFetch,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
})();
