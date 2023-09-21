let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");
let newContent = document.getElementById("newContent");

firstDiv.addEventListener("click", async function () {
    let path = "firsthtml.html";
    let response = await fetch(path);
    let data = await response.text();
    newContent.innerHTML = data;

    // Po załadowaniu zawartości z firsthtml.html, wywołaj funkcję AddTableToFirstPage
    AddTableToFirstPage();
});

secondDiv.addEventListener("click", async function () {
    let path = "secondhtml.html";
    let response = await fetch(path);
    let data = await response.text();
    newContent.innerHTML = data;
});
