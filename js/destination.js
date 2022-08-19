import * as common from "./common.js";
import * as main from "./main.js";
import * as classTools from "./classtools.js";

(() => {
    main.initPage('destination');
    const jFetch = main.jFetch,
        htmlPageTarget = main.htmlPageTarget,
        subNavMatchProp = 'destinations',
        subNavDest = document.querySelectorAll('.subnavbar-destination-element'),
        subNavCurrent = document.querySelector('.snde-current'),
        imgTg = document.querySelector('.destination-img'),
        jsonTransform = [
            {k: 'name', ref: document.querySelector('.destination-title')},
            {k: 'images', ref: imgTg},
            {k: 'description', ref: document.querySelector('.destination-description')},
            {k: 'distance', ref: document.querySelector('.destination-distance')},
            {k: 'travel', ref: document.querySelector('.destination-travel')}
        ],
        subNavUpdateStuff = common.subNavUpdateStuffObj(['snde', 'snde-current', 'destination-img-animation']);

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
