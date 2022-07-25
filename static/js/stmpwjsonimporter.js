export class StmpwJsonImporter {
    constructor(jFile) {
        this.jFile = jFile;
    }

    async getJsonData() {
        try {
            this.jsonData = await fetch(this.jFile).then(res => res.json()).then(data => data);
        }
        catch(error) {
            console.log(error);
        }
        return this.jsonData;
        /*this.jsonData = JSON.parse(localStorage.getItem(['dataJson']));
        if(!this.jsonData) {
            try {
                this.jsonData = await fetch(this.jFile).then(res => res.json()).then( data => data);
                localStorage.setItem('dataJson', JSON.stringify(this.jsonData));
                this.initBS();
            }
            catch(error) {
                console.log(error);
            }
        } else {
            //this.container.innerHTML = "";
            this.initBS(); 
            this.eventsListener();
        }*/
    }    
}