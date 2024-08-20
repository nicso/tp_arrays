let currentOperation = "";
let memory = "";
let result = null;
let lastOp = ""; //ok Princess Leia
let ops = document.getElementsByClassName("btn-op")
let displayedTxt = "";
let operators = ['+','-','/','*','%'];
function num_clk(btn){
    let content = btn.innerHTML;
    if( !isNaN(parseInt(content)) ){ //check if btn is a number
        displayedTxt += content;
        currentOperation += content;
        updateDisplay(displayedTxt);
    }else if (btn.className.includes("btn-op")) { //check for operators
        //TODO replace last operator if repeat
        let nextOperator = "";
        console.log( currentOperation)
        if( operators.includes( currentOperation.slice(-1)) ){ //check for change of operator
            console.log("contenait deja un operator");
            currentOperation = currentOperation.replace(/.$/, content);

        }else{
            operation(currentOperation, content);

        }
        currentOperation += content;

        nextOperator = content;
        updateMemDisplay(currentOperation)
        displayedTxt ="";
        if(memory!=="") {updateMemDisplay(currentOperation)}
        updateDisplay("");
    }
}


function operation(op,char){
    if(result === null) {
        //check if operation already contains an operator
        result = parseFloat(currentOperation);
    }else{
        let lastNum = parseFloat(op.split(lastOp)[1]);
        console.log("last num =" + lastNum)
        if (!isNaN(lastNum)){
            switch (lastOp) {
                case '+':
                    result += lastNum;
                    break;
                case '-':
                    result -= lastNum;
                    break;
            }
        }
        prepareNextOp();

    }
    lastOp = char;
}
function subtraction(op){
    if(result === null) {
        //check if operation already contains an operator
        result = parseFloat(currentOperation);
        currentOperation += "-";
    }else{
        let lastNum = parseFloat(op.split('-')[1]);
        result -= lastNum;
        prepareNextOp();
        currentOperation += "-";
    }    
}
function addition(op){
    if(result === null) {
        //check if operation already contains an operator
        result = parseFloat(currentOperation);
        currentOperation += "+";
    }else{
        let lastNum = parseFloat(op.split('+')[1]);
        result += lastNum;
        prepareNextOp();
        currentOperation += "+";
    }    
}
function prepareNextOp(){
    updateMemDisplay(result);
    memory ="";
    currentOperation =  result.toString();
    updateDisplay("");
}

function clear_dsp(){
    currentOperation = "";
    memory = "";
    result = null;
    lastOp = "";
    updateMemDisplay("");
    updateDisplay(0);
    console.log("clear");
}
function updateDisplay(txt){
    let display = document.getElementById('display');
    display.innerHTML = txt;
}
function updateMemDisplay(txt){
    let display = document.getElementById('memory');
    display.innerHTML = txt;
}
