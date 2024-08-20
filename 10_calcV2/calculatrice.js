


const display = document.getElementById("display");
const memory = document.getElementById("memory");
const operator = document.getElementById("operator");
function addToDisplay(content){
    display.value += content;
}
function setDisplayTo(content){
    display.value = content;
}
function setMemoryTo(content){
    memory.value = content;
}

function clearDisplay(){
    display.value = "";
}

function addToDisplayOp(content)
{
    operator.value=content;
    if(memory.value === '')
    {
        setMemoryTo( display.value  );
    }else {
        setDisplayTo(operation(content))
    }

    clearDisplay()
}

function operation(operator){

}