import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";


(() => {
    //common.clipPather('main');
    main.initPage('destination');
    const jFetch = main.jFetch,
        subnavMatchProp = 'destinations',
        subnavTg = document.querySelectorAll('.subnavbar-destination-element'),
        subnavCurrent = document.querySelector('.snde-current'),
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.destination-title')},
            {k: 'description', ref: document.querySelector('.destination-description')},
            {k: 'distance', ref: document.querySelector('.destination-distance')},
            {k: 'travel', ref: document.querySelector('.destination-travel')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snde', 'snde-current', 'destination-img-animation']);

    
    new classTools.PageClass(
        jFetch,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
})();
