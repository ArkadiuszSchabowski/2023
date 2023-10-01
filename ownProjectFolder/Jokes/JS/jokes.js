class Joke {
    constructor(){
        this.newJoke = document.querySelector("#joke");
        this.btnJoke = document.querySelector("#btnNewJoke");
    }

    Init(){
      this.GetJoke();

      this.btnJoke.addEventListener("click", () => this.GetJoke());
    }

  async GetJoke() {
    let path = "https://api.chucknorris.io/jokes/random";
    let response = await fetch(path);
    let data = await response.json();
    console.log(data);
    this.DisplayNewJoke(data.value);

  }
  DisplayNewJoke(data) {
    this.newJoke.innerHTML = data;
  }
}

let joke = new Joke();
joke.Init();