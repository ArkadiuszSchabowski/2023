class Restaurant {
    constructor() {
        this.mainDiv = document.getElementById("mainDiv");
    }
    async GetRestaurants() {
        let path = "/api/restaurant/restaurants";
        let response = await fetch(path);
        let data = await response.json();
        this.CreateDivForEachRestaurant(data);
    }
    CreateDivForEachRestaurant(data) {
        console.log(data);
        for (let el in data) {
            let newDiv = document.createElement("div");
            newDiv.className = "restaurantsDiv";
            newDiv.innerHTML = `Nazwa restauracji: ${data[el].name}, Godziny otwarcia: ${data[el].openHour} - ${data[el].closeHour}, Dostawa: ${data[el].hasDelivery}`;
            this.mainDiv.appendChild(newDiv);
        }
    }
}
let restaurant = new Restaurant();
restaurant.GetRestaurants();