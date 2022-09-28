import * as common from "./common.js";

//You need to export variables to use'em between modules;
export const jFile = '../data.json';
export let jData = undefined;
export const htmlPageTarget = common.getHtmlRef(window);
const mobileMw = '(max-width: 375px)';


export async function getJdata(ind) {
    const jData = await common.getJSONData(jFile, ind); 
    return jData;
}

export function initPage(tg) {
    const mainNav = common.createMainNavbar(),
        body = document.querySelector('body'),
        pages = ['home', 'destination', 'crew', 'technology'];
    
    pages.forEach((item, ind) => {
        if(item === tg) mainNav.querySelector(`li:nth-child(${ind+1})`).classList.toggle('navbar-current-page');
    });
    body.prepend(mainNav);
    common.createMobileNavbar();
    common.swapMobileVp(mobileMw);

}