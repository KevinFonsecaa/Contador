
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


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