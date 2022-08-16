import * as common from "./common.js";

export function initPage(tg) {
    const mainNav = common.createMainNavbar(),
        body = document.querySelector('body'),
        pages = ['home', 'destination', 'crew', 'technology'];
    
    pages.forEach((item, ind) => {
        if(item === tg) mainNav.querySelector(`li:nth-child(${ind+1})`).classList.toggle('navbar-current-page');
    });
    body.prepend(mainNav);
}