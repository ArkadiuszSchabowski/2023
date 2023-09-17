"use strict";
function ChangeColorsRowsInFrameMainPage(){
    let frameMainPage = document.getElementById("frameMainPage");

    let frameMainPageChild = frameMainPage.getElementsByTagName("p");
    for(let i=0; i<frameMainPageChild.length; i++){
        if(i % 2 == 0){
            frameMainPageChild[i].classList.add("frameLight");
        }
        else{
            frameMainPageChild[i].classList.add("frameDark");
        }
    }
}
ChangeColorsRowsInFrameMainPage();