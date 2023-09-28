let of = document.querySelector("#otherFile");
let frame = document.querySelector("#frame");

of.addEventListener("click", async () =>
{
    let path = "secondFile.html";
    let response = await fetch(path);
    let data = await response.text();

    frame.innerHTML = data;

    // Wybierz zawartość ramki
    let iframeDocument = frame.contentDocument || frame.contentWindow.document;
    let iframeBody = iframeDocument.querySelector("body");

    // Zmień style w ramce
    iframeBody.style.backgroundColor = "green";
    iframeBody.style.fontSize = "24px";
    iframeBody.style.color = "white";
    iframeBody.style.fontWeight = "bold";
});