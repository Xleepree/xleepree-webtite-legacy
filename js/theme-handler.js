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

function setSolarizedLightThemeIndex() {
    document.getElementById('stylesheet').href='css/global-solarized-light.css';
    sessionStorage.setItem("theme", "solarized-light");
}

function setSolarizedDarkThemeIndex() {
    document.getElementById('stylesheet').href='css/global-solarized-dark.css';
    sessionStorage.setItem("theme", "solarized-dark");
}


function checkThemeIndex() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemeIndex();};
    if (storedValue === 'dark') { setDarkThemeIndex();};
    if (storedValue === 'hicf') { setHiCfThemeIndex();};
    if (storedValue === 'sunrise') { setSunriseThemeIndex();};
    if (storedValue === 'solarized-light') { setSolarizedLightThemeIndex();};
    if (storedValue === 'solarized-dark') { setSolarizedDarkThemeIndex();};
}

function checkThemePages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemePages();};
    if (storedValue === 'dark') { setDarkThemePages();};
    if (storedValue === 'hicf') { setHiCfThemePages();};
    if (storedValue === 'sunrise') { setSunriseThemePages();};
    if (storedValue === 'solarized-light') { setSolarizedLightThemePages();};
    if (storedValue === 'solarized-dark') { setSolarizedDarkThemePages();};
}

function checkThemeBlogPages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { setLightThemeBlogPages();};
    if (storedValue === 'dark') { setDarkThemeBlogPages();};
    if (storedValue === 'hicf') { setHiCfThemeBlogPages();};
    if (storedValue === 'sunrise') { setSunriseThemeBlogPages();};
    if (storedValue === 'solarized-light') { setSolarizedLightThemeBlogPages();};
    if (storedValue === 'solarized-dark') { setSolarizedDarkThemeBlogPages();};
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

function setSolarizedLightThemePages() {
    document.getElementById('stylesheet').href='../css/global-solarized-light.css';
    sessionStorage.setItem("theme", "solarized-light");
}

function setSolarizedDarkThemePages() {
    document.getElementById('stylesheet').href='../css/global-solarized-dark.css';
    sessionStorage.setItem("theme", "solarized-dark");
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

function setSolarizedLightThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-solarized-light.css';
    sessionStorage.setItem("theme", "solarized-light");
}

function setSolarizedDarkThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-solarized-dark.css';
    sessionStorage.setItem("theme", "solarized-dark");
}


