import * as common from "./common.js";
import * as main from "./main.js";
import * as classTools from "./classtools.js";

(() => {
    main.initPage('crew');
    const jFetch = main.jFetch,
        htmlPageTarget = main.htmlPageTarget,
        subNavMatchProp = 'crew',
        subNavDest = document.querySelectorAll('.subnavbar-crew-element'),
        subNavCurrent = document.querySelector('.snce-current'),
        imgTg = document.querySelector('.crew-img'),
        
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.crew-name')},
            {k: 'images', ref: imgTg},
            {k: 'role', ref: document.querySelector('.crew-role')},
            {k: 'bio', ref: document.querySelector('.crew-bio')}
        ],
        // --> subNavUpdateStuff = common.subNavUpdateStuffObj(['snde', 'snde-current', 'destination-img-animation']);

    new classTools.PageClass(
        jFetch,
        htmlPageTarget,
        subNavMatchProp,
        subNavDest,
        subNavCurrent,
        imgTg,
        jsonTransform,
        subNavUpdateStuff
    );
})();
