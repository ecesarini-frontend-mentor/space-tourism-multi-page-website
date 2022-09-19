export async function fectchJSON(jsonFile) {
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

export async function getJSONData(jsonFile) {
    let jData = await fectchJSON(jsonFile);
    return jData;
}

export async function initJSON(jsonFile, index) {    
    const jsonData = await getJsonData(jsonFile);
    return (arguments.length === 1)? jsonData: jsonData[index];
}

export function getJsonIndex(jsonFile, index) {
    const data = jsonFile.then(r => r);
    return data[index];
}

export function getHtmlRef(w) {
    const wLoc = w.location.pathname.slice(1);
    return wLoc;
}

export function createMainNavbar() {
    const header = document.createElement('header'),
        a = document.createElement('a'),
        img = document.createElement('img'),
        hr = document.createElement('hr'),
        nav = document.createElement('nav'),
        ul = document.createElement('ul'),
        cont = [
            ['/index.html', '00', 'Home'],
            ['/destination.html', '01', 'Destination'],
            ['/crew.html', '02', 'Crew'],
            ['/technology.html', '03', 'Technology']
        ];
    
    a.setAttribute('href', './index.html')
    img.setAttribute('src', './assets/shared/logo.svg', 'alt', 'Logo. Back home.');
    nav.classList.add('nav-index', 'navtext');

    cont.forEach(item => {
        const a = document.createElement('a'),
            li = document.createElement('li'),
            span1 = document.createElement('span'),
            span2 = document.createElement('span');
        
        li.classList.add('navbar-content-element');
        a.setAttribute('href', item[0]);
        span1.innerText = item[1];
        span2.innerText = item[2];

        a.append(span1, span2);
        li.append(a);
        ul.append(li);
    });

    nav.append(ul);
    a.append(img);
    header.append(a, hr, nav);

    return header;
}

export function subnavMatcher(tg, phRef) {
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

export function subnavUpdateStuffObj(arr) {
    const o = {},
        oKeys = ['tgClass', 'tgCurrentClass', 'animationClass'];

    if(arr.length !== oKeys.length) {
        throw 'Input array mismatches requested parameters.';
    } else {
        oKeys.forEach((val, ind) => o[val] = arr[ind]);
        return o;
    }
}

/*export function clipPather(elem) {
    window.addEventListener("scroll", () => {
        const elementToHide = document.querySelector(elem),
            windowScrollTop = elementToHide.scrollTop;
      
        elementToHide.style.clipPath = `inset(${windowScrollTop}px 0 0 0)`;
      });
}*/
