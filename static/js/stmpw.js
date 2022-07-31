// TODO:
//  Very hard project, start from building class to create HTML autonomous containers @stmphtmlconstructor.js;

//import { StmpwJsonImporter } from "./stmpwjsonimporter.js";
//import { StmpHTMLConstructor } from "./stmpwhtmlconstructor.js";
let navClickedOn = false;

function navClickedAction() {
    navClickedOn = true;

}

(function stmpw() {
    const navClicked = document.querySelectorAll('.navbar-conten-elemet');

    navClicked.forEach(n => n.addEventListener('click', navClickedAction)); 

    //const stmpwjsonimporter = new StmpwJsonImporter('./data.json'),
    //    jsonData = stmpwjsonimporter.getJsonData();
    //new StmpHTMLConstructor(jsonData);
}) ();
