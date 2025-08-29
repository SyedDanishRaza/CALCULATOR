console.log("JavaScript Connected!");

var screen = document.getElementById("screen");

function clickbtn(value){
    screen.value += value
}
function empty(){
    screen.value = ""
}
function delete1val(){
    screen.value = screen.value.slice(0,-1)
}
function Answer(){
    screen.value = eval(screen.value)
}