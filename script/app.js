console.log("app.js");
const input = document.querySelector(".userInput");
const button = document.querySelector(".btn-output");
const output = document.querySelector(".text");
const API = "https://api.funtranslations.com/translate/minion.json";

function constructURL(){
    // console.log(API + "?" + "text=" + input.value);
    return API + "?" + "text=" + input.value;
}

function setOutput(message){
    output.innerHTML = message;
}

function errorHandler(error){
    console.log("OOPS Something came up -" + error);
}

function callAPI(){
    fetch(constructURL())
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        setOutput(json.contents.translated);
    })
    .catch(errorHandler);
}

// console.log(document);
button.addEventListener("click", callAPI);