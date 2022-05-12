
var currentNumberWrapper = document.getElementById('currentNumber');
var mais = document.getElementById('mais');
var menos = document.getElementById('menos');
var currentNumber = 0;

mais.addEventListener("click", increment());
menos.addEventListener("click", decrement());

function decrement(){
    if(currentNumber === -10){
        currentNumber = -10;
    }else{
        currentNumber -= 1;

        if(currentNumber < 0){
            currentNumberWrapper.style.color = 'red';
        }
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment(){
    if(currentNumber === 10){
        currentNumber = 10;
    }else{
   
        currentNumber += 1;
        if(currentNumber >= 0){
            currentNumberWrapper.style.color = 'black';
        }
    }
    
    currentNumberWrapper.innerHTML = currentNumber;
}