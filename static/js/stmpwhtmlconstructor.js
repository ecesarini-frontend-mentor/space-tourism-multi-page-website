export class StmpHTMLConstructor {
    constructor(jsonData) {
        //this.jsonData = jsonData;
        //this.mainContainer = document.querySelector('#main-container');
    }

    static createNavbar(obj) {
        function navbarPop(o) {
            for(let i in o) {
                const navElem = document.createElement('li'),
                    navElemSubOrder = document.createElement('span'),
                    navElemSubCat = document.createElement('span');                
                navElemSubCat.innerText = `${i}`;
                navElemSubOrder.innerText = `${o[i]}`;
                navElem.classList.add(`navelem-tag-${o[i]}`);

            }
        }
        const nbContent = {
            home: 00,
            destination: 01,
            crew: 02,
            technology: 03
        },
            navbar = document.createElement('ul');




    }
}