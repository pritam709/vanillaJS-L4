// var massage = prompt("enter your name:");
// alert("welcome "+massage);

var button= document.querySelector("#clickMe");
console.log(button);

button.addEventListener("click",function(){
    console.log("button gets clicked");
})
var submitButton= document.getElementById("submit");
var textInput=document.getElementById("enterYourMsg");


// var value="";
// submitButton.addEventListener("click",function(){
//      value+=textInput.value;
//     console.log(value);
// })

// live excersixe.....
console.log(document.querySelector("textarea"));

console.log(document.querySelector(".btn-primary"));

console.log(document.getElementById("submit"));

console.log(document.querySelector("[name='userMsg']"))

var out =document.getElementById("out");
//endpoint for serverCALL
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

//function to make a path with parameters

function getTranslationURL(input){
   return serverURL+"?"+"text="+input;
}
submitButton.addEventListener("click",function(){
    var inputText=textInput.value;
    fetch(getTranslationURL(inputText))
    .then(respose => respose.json())
    .then(json =>console.log(json.contents.translated));
})

