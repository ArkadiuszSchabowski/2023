async function GetContent() {
    try {
        let path = "https://localhost:7213/My/GetData";
        let response = await fetch(path);

        if (!response.ok) {
            let errorMessage = `Network response was not ok. Status: ${response.status} - ${response.statusText}`;
            throw new Error(errorMessage);
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
