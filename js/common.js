export async function getJsonData(jsonFile) {
    let jsonData = undefined;
    try {
        jsonData = await fetch(jsonFile)
        .then(resp => resp.json())
        .then(data => data);
    } catch(error) {
        jsonData = console.log(error);
    }
    return jsonData;
}

export async function initJSON(jsonFile, index) {    
    const jsonData = await getJsonData(jsonFile);
    return (arguments.length === 1)? jsonData: jsonData[index];
}

/*export async function initJSON(jsonFile, index) {    
    const jsonData = await getJsonData(jsonFile).then( r => r);

    return (arguments.length === 1)? jsonData: jsonData[index];
}*/

/*export async function getJsonIndex(jsonFile, index) {
     return await jsonFile.then(r => r[index]);
}*/
export function getJsonIndex(jsonFile, index) {
    const data = jsonFile.then(r => r);
    return data[index];
}

export function getHtmlRef(w) {
    const wLoc = w.location.pathname.slice(1);
    return wLoc;
}

export function subNavMatcher(tg, phRef) {
    const childCount = tg.parentElement.childElementCount,
        classRef = (childCount <= 9)?
        Array.from({length: childCount}, (elem, ind) => phRef + '-0' + ++ind):
        Array.from({length: childCount}, (elem, ind) => phRef + '-' + ++ind);
    let indexFound = undefined;
    
    classRef.forEach((cl, ind) => { 
        if(tg.matches('.' + cl)) indexFound = ind;
    });
    return indexFound;
}