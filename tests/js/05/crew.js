import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

(() => {
    main.initPage('crew');
    const jFetch = main.jFetch,
        htmlPageTarget = main.htmlPageTarget,
        subnavMatchProp = 'crew',
        subnavTg = document.querySelectorAll('.subnavbar-crew-element'),
        subnavCurrent = document.querySelector('.snce-current'),
        imgTg = document.querySelector('.crew-img'),
        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.crew-name')},
            {k: 'images', ref: imgTg},
            {k: 'role', ref: document.querySelector('.crew-role')},
            {k: 'bio', ref: document.querySelector('.crew-bio')}
        ],
        subnavUpdateStuff = common.subnavUpdateStuffObj(['snce', 'snce-current', 'crew-img-animation']);

    new classTools.PageClass(
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
