const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting cat fact...");
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data); 
        factPara.innerText = data[0].text;
    } catch (error) {
        console.error("Error fetching fact:", error);
        factPara.innerText = "Could not fetch fact.";
    }
};

btn.addEventListener("click", getFacts);
