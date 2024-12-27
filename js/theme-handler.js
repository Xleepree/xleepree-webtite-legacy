function setLightThemeIndex() {
    document.getElementById('stylesheet').href='css/global.css';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemeIndex() {
    document.getElementById('stylesheet').href='css/global-dark.css';
    sessionStorage.setItem("theme", "dark");
}

function checkThemeIndex() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { document.getElementById('stylesheet').href = 'css/global.css';};
    if (storedValue === 'dark') { document.getElementById('stylesheet').href = 'css/global-dark.css';};
}

function checkThemePages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { document.getElementById('stylesheet').href = '../css/global.css';};
    if (storedValue === 'dark') { document.getElementById('stylesheet').href = '../css/global-dark.css';};
}

function checkThemeBlogPages() {
    var storedValue = sessionStorage.getItem('theme'); 
    if (storedValue === 'light') { document.getElementById('stylesheet').href = '../../css/global.css';};
    if (storedValue === 'dark') { document.getElementById('stylesheet').href = '../../css/global-dark.css';};
}

function setLightThemePages() {
    document.getElementById('stylesheet').href='../css/global.css';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemePages() {
    document.getElementById('stylesheet').href='../css/global-dark.css';
    sessionStorage.setItem("theme", "dark");
}

function setLightThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global.css';
    sessionStorage.setItem("theme", "light");
}

function setDarkThemeBlogPages() {
    document.getElementById('stylesheet').href='../../css/global-dark.css';
    sessionStorage.setItem("theme", "dark");
}
