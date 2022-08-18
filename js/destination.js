import * as common from "./common.js"
import * as main from "./main.js";
import * as classTools from "./classtools.js";

(() => {
    const jFile = '../data.json',
        htmlPageTarget = main.getHtmlRef,
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
        subNavUpdateStuff = common.subNavUpdateStuffObj(['snde', 'sndeCurrent', 'destination-img-animation']);

    main.initPage('destination');
    new classTools.pageClass(
        jFile,
        htmlPageTarget,
        subNavDest,
        subNavCurrent,
        imgTg,
        jsonTransform,
        subNavUpdateStuff
    );
})();
