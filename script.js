console.clear();

console.log("Linked with HTML");
const linkOG = document.querySelector("link[rel='stylesheet'][href='styles.css']");
const hideHi = document.querySelector("[data-js='hi']");
const hidePort = document.querySelector("[data-js='port']");
const showHi = document.querySelector("[data-js='hiddenhi']");
const showPort = document.querySelector("[data-js='hiddenport']");

const secretButton = document.querySelector("[data-js='secretbutton']");
secretButton.addEventListener("click", () => {
    linkOG.href = "./components/stylessecret.css";
    console.log("theme switch");
    hideHi.classList.add('hide')
    hidePort.classList.add('hide')
    showHi.classList.remove('hide')
    showPort.classList.remove('hide')
    console.log("japan switch");
});