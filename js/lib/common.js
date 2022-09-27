export async function fectchJSON(jsonFile, ind) {
    let jsonData = undefined;
    try {
        jsonData = await fetch(jsonFile);
        jsonData = await jsonData.json();
        jsonData = ind? await jsonData[ind]: await jsonData; 
            //.then(data => data);
    } catch(error) {
        console.log(error);
    }
    return jsonData;
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

// Mobile navbar
export function createMobileNavbar() {
    const mobileNavbar = document.createElement('div'),
        mobileNavCloseBtn = document.createElement('button'),
        mobileNavCloseImg = document.createElement('img'),
        mobileNavHamburgerBtn = document.createElement('button'),
        mobileHamburgerImg = document.createElement('img');
    
    mobileNavbar.classList.add('mobile-navbar');
    mobileNavCloseBtn.classList.add('mobile-navbar-close-btn');
    mobileNavCloseImg.src = '../../assets/shared/icon-close.svg';
    mobileNavHamburgerBtn.classList.add('mobile-navbar-hamburger');
    mobileHamburgerImg.src = '../../assets/shared/icon-hamburger.svg';
    
    mobileNavCloseBtn.append(mobileNavCloseImg);
    mobileNavHamburgerBtn.append(mobileHamburgerImg);
    document.header.append(mobileNavHamburgerBtn);
    document.body.prepend(mobileNavbar);
}

export function swapMobileVp(maxVw, tgNavbar) {
    const matchMqW = window.matchMedia(maxVw),
        mobileNavbar = document.querySelector('.mobile-navbar'),
        mobileNavbarClose = document.querySelector('.mobile-navbar-close-btn'),
        mobileNavbarHamburger = document.querySelector('.mobile-navbar-hamburger');

    window.addEventListener('load', mwChanged);
    matchMqW.addEventListener('change', mwChanged);
    mobileNavbarHamburger.addEventListener('click', navClicked);

    const mwChanged = () => {
        if(matchMqW.matches) {
            mobileNavbar.append(tgNavbar);
            [mobileNavbarClose, mobileNavbarHamburger]
                .forEach(mob => mob.style.display = '');                
        }
    }
    const navClicked = () => {
        if(matchMqW.matches) {
            mobileNavbar.style.display = '';
        }
    }

}
