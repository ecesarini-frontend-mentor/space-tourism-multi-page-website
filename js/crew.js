import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

class PageClassCrew extends classTools.PageClass {
    jData = undefined;
    //crewMqWidth = window.matchMedia('(max-width: 768px)');
    constructor(
            subnavTg, 
            subnavCurrent,
            jsonTransform,
            subnavUpdateStuff            
        ) { 
        super(
            subnavTg, 
            subnavCurrent,
            jsonTransform,
            subnavUpdateStuff
            ) 
        }
    
    async crewInit(jData) {
        this.jData = await jData; // this.jdata is an instance prop so you need to reinitialize it inside a new (although inherited) instance of PageClass
        this.crewEventsListener();
    }

    crewEventsListener() {
        const crewMqWidthBind = this.crewEventsChange.bind(this);
        super.eventsListener();
        window.addEventListener('load', this.crewEventsLoad.call(this));
        this.mqWidth.addEventListener('change', crewMqWidthBind);
    }
    //crewEventsLoad = () => {
    crewEventsLoad() {
        super.eventsLoad();
        this.crewSubnavMqSwitch();
    }
    //crewEventsChange = () => {
    crewEventsChange() {
        super.eventsChange();
        this.crewSubnavMqSwitch();
    }

    crewSubnavMqSwitch() {
        const cifbmc = document.querySelector('.crew-interact-fb-middle-container'),
            crewSubnav = document.querySelector('.subnavbar');
        if(this.mqWidth.matches) {
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
    const jData = common.fectchJSON(main.jFile, 'crew'),
        subnavTg = document.querySelectorAll('.subnavbar-crew-element'),
        subnavCurrent = document.querySelector('.snce-current'), 
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.crew-name')},
            {k: 'role', ref: document.querySelector('.crew-role')},
            {k: 'bio', ref: document.querySelector('.crew-bio')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snce', 'snce-current', 'crew-img-animation']);

    const pageClassCrew = new PageClassCrew(
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
    pageClassCrew.crewInit(jData);
})();

