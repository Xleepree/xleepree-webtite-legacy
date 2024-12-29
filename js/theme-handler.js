function setLightThemeIndex() {
    document.getElementById('stylesheet').href='css/global.css';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemeIndex() {
    document.getElementById('stylesheet').href='css/global-dark.css';
    sessionStorage.setItem("theme", "dark");
}

function setHiCfThemeIndex() {
    document.getElementById('stylesheet').href='css/global-hi-cf.css';
    sessionStorage.setItem("theme", "hicf");
}

function setSunriseThemeIndex() {
    document.getElementById('stylesheet').href='css/global-sunrise.css';
    sessionStorage.setItem("theme", "sunrise");
}


function checkThemeIndex() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemeIndex();};
    if (storedValue === 'dark') { setDarkThemeIndex();};
    if (storedValue === 'hicf') { setHiCfThemeIndex();};
    if (storedValue === 'sunrise') { setSunriseThemeIndex();};
}

function checkThemePages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemePages();};
    if (storedValue === 'dark') { setDarkThemePages();};
    if (storedValue === 'hicf') { setHiCfThemePages();};
    if (storedValue === 'sunrise') { setSunriseThemePages();};
}

function checkThemeBlogPages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemeBlogPages();};
    if (storedValue === 'dark') { setDarkThemeBlogPages();};
    if (storedValue === 'hicf') { setHiCfThemeBlogPages();};
    if (storedValue === 'sunrise') { setSunriseThemeBlogPages();};
}


function setLightThemePages() {
    document.getElementById('stylesheet').href='../css/global.css';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemePages() {
    document.getElementById('stylesheet').href='../css/global-dark.css';
    sessionStorage.setItem("theme", "dark");
}

function setHiCfThemePages() {
    document.getElementById('stylesheet').href='../css/global-hi-cf.css';
    sessionStorage.setItem("theme", "hicf");
}

function setSunriseThemePages() {
    document.getElementById('stylesheet').href='../css/global-sunrise.css';
    sessionStorage.setItem("theme", "sunrise");
}


function setLightThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global.css';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-dark.css';
    sessionStorage.setItem("theme", "dark");
}

function setHiCfThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-hi-cf.css';
    sessionStorage.setItem("theme", "hicf");
}

function setSunriseThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-sunrise.css';
    sessionStorage.setItem("theme", "sunrise");
}
