import * as common from "./common.js";

/*const jsonData = common.initJSON("../data.json", 'destinations'),
    htmlPageTarget = common.getHtmlRef(window);*/


class Destination {
    constructor() {
        this.jsonData = undefined;
        this.htmlPageTarget = common.getHtmlRef(window);
        this.navDest = document.querySelectorAll('.navbar-destination-element');
        this.init();
        this.jsonDestTransform = [

        ];
    }

    async init() {
        this.jsonData = await common.initJSON("../data.json", 'destinations');
        this.navDest.forEach(n => n.addEventListener('click', this));
    }
    handleEvent(e) {
        const ect = e.currentTarget;

        let tg = ect.innerText;
        
        tg = tg.charAt(0).toUpperCase() + tg.slice(1).toLowerCase();
        switch(e.type) {
            case 'click':
                this.linker(this.jsonData[tg]);
                break;
        }
    }

    linker(target) {
        /*target = target.charAt(0).toUpperCase() + target.slice(1).toLowerCase();*/
        //debugger;
    }

}

new Destination();

