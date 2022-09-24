import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

class PageClassCrew extends classTools.PageClass {
    //crewJdata = undefined;
    //subnavbar
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
            //this.crewEventsListener();
            this.crewInit();
        }
    
    async crewInit() {
        this.jData = await this.jFetch;  // this.jdata is an instance prop so you need to reinitialize it inside a new (although inherited) instance of PageClass
        this.jData = await this.jData[this.subnavMatchProp];
        this.crewEventsListener();
    }

    crewEventsListener() {
        super.eventsListener();
        window.addEventListener('load', this.crewEventsLoad.call(this));
        this.mqWidthMatch.addEventListener('change', this.crewEventsChange.call(this));
    }
    //crewEventsLoad = () => {
    crewEventsLoad() {
        //this.eventsLoad();  // You can't use 'super' to invoke a parent arrow method (check: https://stackoverflow.com/questions/57561473/how-to-invoke-arrow-functions-on-a-superclass-with-super-in-subclass)
        super.eventsLoad();
        this.crewSubnavMqSwitch();
    }
    crewEventsChange(){
        super.eventsChange();
        this.crewSubnavMqSwitch();
    }

    crewSubnavMqSwitch() {
        const cifbmc = document.querySelector('.crew-interact-fb-middle-container'),
            crewSubnav = document.querySelector('.subnavbar');
        if(this.mqWidthMatch) {
            cifbmc.append(crewSubnav);
        } else {
            cifbmc.after(crewSubnav);
        }
        /*if(this.mqWidthMatch) {
            //document.querySelector('.crew-interact-fb-middle-container').append(document.querySelector('.subnavbar'));
            document.querySelector('.crew-interact-fb-middle-container').append(this.subnavTg);
        }*/
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

