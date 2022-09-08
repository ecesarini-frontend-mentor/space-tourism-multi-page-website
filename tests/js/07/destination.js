import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";


class PageClassDest extends classTools.PageClass {
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
    }
    jsonGetPageRef() {
        const j = this.htmlPageTarget.split('.')[0] + 's';
        return j;
    }
}


(() => {
    main.initPage('destination');
    const jFetch = main.jFetch,
        //htmlPageTarget = common.getHtmlRef(main.htmlPageTarget),
        htmlPageTarget = main.htmlPageTarget,
        subnavMatchProp = 'destinations',
        subnavTg = document.querySelectorAll('.subnavbar-destination-element'),
        subnavCurrent = document.querySelector('.snde-current'),
        imgTg = document.querySelector('.destination-img'),
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.destination-title')},
            {k: 'images', ref: imgTg},
            {k: 'description', ref: document.querySelector('.destination-description')},
            {k: 'distance', ref: document.querySelector('.destination-distance')},
            {k: 'travel', ref: document.querySelector('.destination-travel')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snde', 'snde-current', 'destination-img-animation']);

    
    new PageClassDest(
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
