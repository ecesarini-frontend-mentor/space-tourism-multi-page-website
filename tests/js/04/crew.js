import * as common from "./lib/common.js";
import * as main from "./lib/main.js";
import * as classTools from "./lib/classtools.js";

(() => {
    main.initPage('crew');
    const jFetch = main.jFetch,
        htmlPageTarget = main.htmlPageTarget,
        subNavMatchProp = 'crew',
        subNavTg = document.querySelectorAll('.subnavbar-crew-element'),
        subNavCurrent = document.querySelector('.snce-current'),
        imgTg = document.querySelector('.crew-img'),
        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.crew-name')},
            {k: 'images', ref: imgTg},
            {k: 'role', ref: document.querySelector('.crew-role')},
            {k: 'bio', ref: document.querySelector('.crew-bio')}
        ],
        subNavUpdateStuff = common.subNavUpdateStuffObj(['snce', 'snce-current', 'crew-img-animation']);

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
