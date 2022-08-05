import { getJsonData, getHtmlRef } from "./common.js";

(function init() {
    const jsonData = getJsonData("../data.json"),
        htmlPage = ['destination.html'],
        htmlPageTarget = getHtmlRef(window);
    
    htmlPage.forEach( tg => {
        switch(tg) { 
            case 'destination.html': 
                
        }
    })
})();