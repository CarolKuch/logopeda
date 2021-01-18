const topBar = document.querySelector('.top-bar-name');
let hamburgerHandler = document.querySelector('.main-menu-hamburger');
let mainNavList = document.querySelector('.main-menu-list');
let mainMenuClose = document.querySelector('.main-menu-close-trigger');

/*Used as a flag in small and medium display resolutions. 
    0 - hamburger menu type; 
    1 - menu after dropdown*/
let isDropdown = 0;

let displayResolution = window.innerWidth;
let menuState;
   
//Changes opacity of top-bar-name in top-bar. Top-bar-name is visible if user scrolled enough a page.
const setTopBarNameVisibility = () => {
    if (window.pageYOffset > 50)
        topBar.style.opacity = "1";
    else
        topBar.style.opacity = "0";
}  

let MainMenuType = {
    hamburger: 'hamburger',
    dropdown: 'dropdown',
    large: 'large'
};

/*Sets the type of menu, depending of:
    - display resolution,
    - which one button (hamburger or close-trigger) was clicked at the last time:
        -> hamburger menu type is a default for small and medium display resolutions.*/
let setMenuState = () => {        
    if (displayResolution > 750)
        menuState = MainMenuType.large;         
    else if (isDropdown)
        menuState = MainMenuType.dropdown;
    else
        menuState = MainMenuType.hamburger;      
        
    executeMenuState(menuState);
}

let executeMenuState = () => {
    if (menuState === MainMenuType.large) {
        mainNavList.className = 'main-menu-list';
        mainMenuClose.className = 'main-menu-close-trigger hidden';
        hamburgerHandler.className = 'main-menu-hamburger hidden';
    }else if (menuState === MainMenuType.dropdown) {
        mainNavList.className = 'hamburger-clicked';
        mainMenuClose.className = 'main-menu-close-trigger visible';
        hamburgerHandler.className = 'main-menu-hamburger hidden';
    }else {
        mainNavList.className = 'hidden';            
        mainMenuClose.className = 'main-menu-close-trigger hidden';
        hamburgerHandler.className = 'main-menu-hamburger visible';
    }
}

    //Sets menuState automatically after refreshing the page.
setMenuState();

    //Launches setTopBarNameVisibility (used as a callback) when user scrolls.
window.addEventListener('scroll', setTopBarNameVisibility);

window.addEventListener('resize', () => {
    displayResolution = window.innerWidth;
    setMenuState()});

hamburgerHandler.addEventListener('click', () => {
    isDropdown = 1;
    setMenuState()});

mainMenuClose.addEventListener('click', () => {
    isDropdown = 0;
    setMenuState()});
