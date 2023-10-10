let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", ButtonHandleClick);
btn2.addEventListener("click", ButtonHandleClick);

function ButtonHandleClick(event) {
    if (event.target === btn1) {
        console.log("Correct!")
    }
    else if (event.target === btn2) {
        console.log("Wrong!");
    }
    RemoveListenersForBtns();
}

function RemoveListenersForBtns() {
    btn1.innerText = "A";
    btn2.innerText = "B";
    btn1.removeEventListener("click", ButtonHandleClick);
    btn2.removeEventListener("click", ButtonHandleClick);
}
