import * as common from "./common.js";
import * as main from "./main.js";
import * as classTools from "./classtools.js";

(() => {
    main.initPage('destination');
    //const jFile = '../data.json';
    //const jData = (async () => await common.getJsonData(jFile))().then(r=>r),
    //const jData = async () => await common.getJSONData(main.jFile);
    //const htmlPageTarget = main.htmlPageTarget,
    const jData = main.jData,
        htmlPageTarget = main.htmlPageTarget,
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

    new classTools.pageClass(
        jData,
        htmlPageTarget,
        subNavDest,
        subNavCurrent,
        imgTg,
        jsonTransform,
        subNavUpdateStuff
    );
})();
