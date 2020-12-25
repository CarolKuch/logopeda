
    let topBar = document.getElementsByClassName('top-bar-name')[0];
    window.addEventListener("scroll", () => {        
        if(window.pageYOffset > 10){
            topBar.style.opacity= "1";        
        }
        else{
            topBar.style.opacity = "0";
        };
    }, false);
