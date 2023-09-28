let character = "";

class Start{
    constructor(){
        this.btnHedgehog = document.getElementById("btnHedgehog");
        this.btnFox = document.getElementById("btnFox"); 

        this.btnFox.addEventListener("click", ()=>{
            console.log("Fox clicked");
            character = "Fox";
            console.log("Nasz bohater to :" + character);
            this.LoadGame();
        })
        this.btnHedgehog.addEventListener("click", () =>{
            console.log("Hedgehog clicked");
            character = "Hedgehog";
            console.log("Nasz bohater to :" + character);
            this.LoadGame();
        })
    }
    LoadGame(){
        localStorage.setItem('character', character);
        window.location.href = "../Animal/HTML/animal.html";
    }
}
let start = new Start();