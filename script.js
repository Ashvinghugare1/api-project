const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);


const getFacts = async () => {
    console.log("getFacts");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    // console.log(data[0].text);
    factPara.innerHTML = data[0].text;
}
btn.addEventListener("click", getFacts);