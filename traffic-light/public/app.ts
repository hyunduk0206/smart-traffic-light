console.log("hellots1");

const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

red!.style.backgroundColor = "red";
yellow!.style.backgroundColor = "yellow";
green!.style.backgroundColor = "green";

setTimeout(() => {
    red!.style.backgroundColor = "gray";
    yellow!.style.backgroundColor = "gray";
    green!.style.backgroundColor = "gray";
}, 1000);
