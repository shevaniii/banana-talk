var btn = document.querySelector(".translate-btn")
var txtInput = document.querySelector("#txt-input")

btn.addEventListener("click", function clickEvent(){
    console.log("clicked");
    console.log("input", txtInput.value)
})