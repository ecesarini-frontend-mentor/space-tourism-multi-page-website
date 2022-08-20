import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

(() => {
    main.initPage('techonology');
    const jFetch = main.jFetch,
        htmlPageTarget = main.htmlPageTarget,
        subNavMatchProp = 'technology',
        subNavTg = document.querySelectorAll('.subnavbar-tech-element'),
        subNavCurrent = document.querySelector('.snte-current'),
        imgTg = document.querySelector('.tech-img'),
        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.tech-name')},
            {k: 'images', ref: imgTg},
            {k: 'description', ref: document.querySelector('.tech-description')}
        ],
        subNavUpdateStuff = common.subNavUpdateStuffObj(['snte', 'snte-current', 'tech-img-animation']);

    new classTools.PageClass(
        jFetch,
        htmlPageTarget,
        subNavMatchProp,
        subNavTg,
        subNavCurrent,
        imgTg,
        jsonTransform,
        subNavUpdateStuff
    );
})();