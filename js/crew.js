import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

class PageClassCrew extends classTools.PageClass {
    //crewJdata = undefined;
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
            this.crewEventsListener();
            //this.crewInit();
        }
    
    /*crewInit = async () => {
        this.init();
        this.crewEventsListener();
    }*/

    crewEventsListener() {
        super.eventsListener();
        window.addEventListener('load', this.crewEventsLoad);
        this.mqWidthMatch.addEventListener('change', this.crewEventsChange);
    }
    crewEventsLoad = () => {
        this.eventsLoad();  // You can't use 'super' to invoke a parent arrow method (check: https://stackoverflow.com/questions/57561473/how-to-invoke-arrow-functions-on-a-superclass-with-super-in-subclass)
        this.crewSubnavAppend();
    }
    crewEventsChange = () => {
        this.eventsChange();
        this.crewSubnavAppend();
    }

    crewSubnavAppend() {
        if(this.mqWidthMatch) {
            document.querySelector('.crew-interact-fb-middle-container').append(document.querySelector('.subnavbar'));
        }
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
    const pcc = new PageClassCrew(
        jFetch,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
    //pcc.crewInit();
    //console.log('debug');
    //debugger;
})();

