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

export function getHtmlRef(w) {
    const wLoc = w.location.pathname.slice(1);
    return wLoc;
}