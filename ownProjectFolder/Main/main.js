class MainWindow {
  constructor() {
    this.clocks = document.querySelector("#clocks");
    this.jokes = document.querySelector("#jokes");
    this.projectWindow = document.querySelector("#projectWindow");
  }
  MainWindowContent() {
    this.clocks.addEventListener("click", () => this.GetContentClocks());
    this.jokes.addEventListener("click", () => {
      let newFrame = document.createElement("iframe");
      newFrame.src = "jokes.html";
      newFrame.style.width = "100%";
      newFrame.style.height = "100%";
      this.projectWindow.innerHTML = ''; // Wyczyść zawartość projectWindow
      this.projectWindow.appendChild(newFrame);
    });
  }

  async GetContentClocks() {
    let path = "clocks.html";
    let response = await fetch(path);
    let data = await response.text();
    this.projectWindow.innerHTML = data;

    clock.NormalClock();
  }
}

let mainWindow = new MainWindow();
mainWindow.MainWindowContent();
