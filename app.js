console.log("JavaScript Connected!");

var calculate = document.getElementById("calculation");
var answer = document.getElementById("result");

function clickbtn(value){
    if(answer.value === "Error"){
        calculate.value = "";
        answer.value = "";
    }
    calculate.value += value;
    answer.value = "";
}

function empty(){
    calculate.value = "";
    answer.value = "";
}

function delete1val(){
    if( answer.value === "Error"){
        calculate.value = "";
        answer.value = "";
    } else {
        calculate.value = calculate.value.slice(0,-1);
        answer.value = "";
    }
}

function ans(){
    var exp = calculate.value;
    var opt = "-+*/%";
    var error = false;

    if(exp === "") error = true;

    if(opt.indexOf(exp[0]) !== -1 || opt.indexOf(exp[exp.length-1]) !== -1) error = true;

    for(var i=0; i<exp.length-1; i++){
        if(opt.indexOf(exp[i]) !== -1 && opt.indexOf(exp[i+1]) !== -1){
            error = true;
            break;
        }
    }

    if(error){
        answer.value = "Error";
        return;
    }

    let result = eval(exp);
    if(isNaN(result)){
        answer.value = "Error";
    } else {
        answer.value = result;
    }
}
