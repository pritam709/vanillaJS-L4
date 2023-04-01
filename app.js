// var massage = prompt("enter your name:");
// alert("welcome "+massage);

var button= document.querySelector("#clickMe");
console.log(button);

button.addEventListener("click",function(){
    console.log("button gets clicked");
})
var submitButton= document.getElementById("submit");
var textInput=document.getElementById("enterYourMsg");



submitButton.addEventListener("click",function(){
    var value=textInput.value;
    console.log(value);
})