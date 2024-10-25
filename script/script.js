import Window from "./window.js"; 

const body = document.querySelector("body");
const botaoHeader = document.querySelector("#botao-header");

botaoHeader.addEventListener("click", () => {
    Window.exibir();
});
