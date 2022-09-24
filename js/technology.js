import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

(() => {
    main.initPage('techonology');
    const jData = common.fectchJSON(main.jFile, 'technology'),
        subnavTg = document.querySelectorAll('.subnavbar-tech-element'),
        subnavCurrent = document.querySelector('.snte-current'),        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.tech-name')},
            {k: 'description', ref: document.querySelector('.tech-description')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snte', 'snte-current', 'tech-img-animation']);
    
    let pageClassTech = new classTools.PageClass(
        subnavTg,
        subnavCurrent,
        jsonTransform,
        subnavUpdateStuff
    );
    pageClassTech.init(jData);
    //debugger;
})();