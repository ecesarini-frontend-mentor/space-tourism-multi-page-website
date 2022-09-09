import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

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
    
    let pc = new classTools.PageClass(
        jFetch,
        subnavMatchProp,
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
    //debugger;
})();