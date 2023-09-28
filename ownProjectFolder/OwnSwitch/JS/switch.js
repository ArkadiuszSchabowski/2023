class SwitchClass{

    DarkOrLightMode(){
        let lightSwitch = document.getElementById("lightSwitch");
        let ball = document.getElementById("ball");
        let isDark = false;
        
        lightSwitch.addEventListener("click", () => {
            if (isDark) {
                ball.style.transform = "translateX(0px)";
                isDark = false;
            } else {
                ball.style.transform = "translateX(75px)";
                isDark = true;
            }
        });
    }
    
}
let switchClass = new SwitchClass();
switchClass.DarkOrLightMode();
