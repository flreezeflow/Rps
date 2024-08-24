const result = document.getElementById('result')

function appendToDisplay(input){
    result.textContent += input;
}

function clearDisplay(){
    result.textContent = ''
}

function calculate(){
    try{
        result.textContent = eval(result.textContent)
    }catch(error){
        result.textContent = "Error"
    }
    
}