class MainWindow {
  constructor() {
    this.clocks = document.querySelector("#clocks");
    this.jokes = document.querySelector("#jokes");
    this.projectWindow = document.querySelector("#projectWindow");
    this.hedgehogGame = document.querySelector("#hedgehogGame");
  }
  MainWindowContent() {
    this.clocks.addEventListener("click", () => this.GetContentClocks());
    this.jokes.addEventListener("click", () => {
      let newFrame = document.createElement("iframe");
      newFrame.src = "../../Jokes/HTML/jokes.html";
      newFrame.style.width = "100%";
      newFrame.style.height = "100%";
      this.projectWindow.innerHTML = ''; // Wyczyść zawartość projectWindow
      this.projectWindow.appendChild(newFrame);
    });
    this.hedgehogGame.addEventListener("click", () =>{
      let newFrame = document.createElement("iframe");
      newFrame.src = "../../Select Character/selectCharacter.html";
      newFrame.style.width = "100%";
      newFrame.style.height = "100%";
      this.projectWindow.innerHTML = ''; // Wyczyść zawartość projectWindow
      this.projectWindow.appendChild(newFrame);
    })
  }

  async GetContentClocks() {

    let newFrame = document.createElement("iframe");
    newFrame.src = "../../Clock/HTML/clocks.html"
    newFrame.style.width = "100%";
    newFrame.style.height = "100%";
    this.projectWindow.innerHTML = " ";
    this.projectWindow.appendChild(newFrame); 
  }
}

let mainWindow = new MainWindow();
mainWindow.MainWindowContent();
