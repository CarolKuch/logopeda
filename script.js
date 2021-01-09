
    const topBar = document.getElementsByClassName('top-bar-name')[0];
    let hamburgerHandler = document.getElementsByClassName('main-menu-hamburger')[0];
    let mainNavList = document.getElementsByClassName('main-menu-list')[0];
    let mainMenuClose = document.getElementsByClassName('main-menu-close-trigger')[0];
    let mainMenuVisibility = 0;

    const setTopBarNameVisibility = () => {
        if (window.pageYOffset > 10)
            topBar.style.opacity = "1";
        else
            topBar.style.opacity = "0";
    } 

    const setMainMenuVisibility = () => {
        if(mainMenuVisibility === 0){
            mainNavList.removeAttribute('class', 'main-menu-list');
            mainNavList.setAttribute('class', 'hamburger-clicked');
            mainMenuClose.removeAttribute('class', 'hidden');
            mainMenuClose.setAttribute('class', 'visible main-menu-close-trigger');
            hamburgerHandler.removeAttribute('class', 'visible');
            hamburgerHandler.setAttribute('class', 'hidden');
            mainMenuVisibility = 1;
        }
        else if(mainMenuVisibility === 1) {
             mainNavList.removeAttribute('class', 'hamburger-clicked');
             mainNavList.setAttribute('class', 'hidden hamburger-clicked');            
             mainMenuClose.removeAttribute('class', 'visible');
             mainMenuClose.setAttribute('class', 'hidden main-menu-close-trigger');
             hamburgerHandler.removeAttribute('class', 'hidden');
             hamburgerHandler.setAttribute('class', 'main-menu-hamburger');
             mainMenuVisibility = 0;
        }
    }

    const setMenuType = () => {
        if((window.innerWidth > 751) && (mainNavList.classList.contains('hamburger-clicked'))) {
            mainNavList.removeAttribute('class', 'hamburger-clicked');
            mainNavList.setAttribute('class', 'main-menu-list');
            mainMenuClose.setAttribute('class', 'hidden');
            hamburgerHandler.setAttribute('class', 'main-menu-hamburger hidden');
            mainMenuClose.setAttribute('class', 'hidden main-menu-close-trigger');
        }
    }

    window.addEventListener("scroll", setTopBarNameVisibility);
    hamburgerHandler.addEventListener('click', setMainMenuVisibility);    
    mainMenuClose.addEventListener('click', setMainMenuVisibility);
    window.addEventListener("resize", setMenuType);
