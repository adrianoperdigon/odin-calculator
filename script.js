function operate(operator,num1,num2){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if(operator === '+'){
        operand1 = add(num1,num2)
        operand2 = undefined
        display.textContent = operand1
    }
    else if(operator === '-'){
        operand1 = subtract(num1,num2)
        operand2 = undefined
        display.textContent = operand1
    }
    else if(operator === '*'){
        operand1 = multiply(num1,num2)
        operand2 = undefined
        display.textContent = operand1
    }
    else if(operator === '/'){
        operand1 = divide(num1,num2)
        operand2 = undefined
        display.textContent = operand1
    }
}

function add(num1,num2){
    return parseFloat((num1+num2).toFixed(7))
}

function subtract(num1,num2){
    return parseFloat((num1-num2).toFixed(7))
}

function multiply(num1,num2){
    return parseFloat((num1*num2).toFixed(7))
}

function divide(num1,num2){
    if (num2 == 0){
       return display.textContent = 'ERROR!'
    }
    else{
        return parseFloat((num1/num2).toFixed(7))
    }
}

let display = document.querySelector('#display')
display.textContent = '0'
let operationResult

let numberBtns = document.querySelectorAll('.number')
let operand1 = undefined
let operand2 = undefined

let operatorBtns = document.querySelectorAll('.operator')
let operator
let clearBtn = document.querySelector('#clear')
let resultBtn = document.querySelector('#result')
let bulletPointBtn = document.querySelector('#bullet-point')

numberBtns.forEach((numberBtn)=>{
    numberBtn.addEventListener('click',()=>{
        if (numberBtn.textContent === '0' && operand1 === undefined){
            operand1 = 0
            populateDisplay()
        }
        else if (numberBtn.textContent === '0' && operand1 != 0 && operand2 === undefined){
            operand1 += numberBtn.textContent
            operand1 = operand1.replace('undefined','')
            populateDisplay()
        }
        else if (numberBtn.textContent === '0' && operand2 === undefined){
            operand2 = '0'
            populateDisplay()
        }
        else if(operand1 == 0){
            if(operand1 == '0.'){
                operand1 += numberBtn.textContent
                populateDisplay()
            }
            else{
                operand1 = numberBtn.textContent
                populateDisplay()
            }
          
        }
        else if(operand1 != 0 && operator === undefined){
            operand1 += numberBtn.textContent
            operand1 = operand1.replace('undefined','')
            populateDisplay()
        }
        else if(operand1 != undefined && operator != undefined){
            if(operand2 == 0 && numberBtn.textContent === '0'){
                operand2 = 0
                // operand2 = operand2.replace('undefined','')
                populateDisplay()
            }
            else if(operand2 == 0){
                operand2 = numberBtn.textContent
                operand2 = operand2.replace('undefined','')
                populateDisplay()
            }
            else{
                operand2+= numberBtn.textContent
                operand2 = operand2.replace('undefined','')
                populateDisplay()
            }
        }
    })
})

// bulletPointBtn.addEventListener('click',()=>{
//     if(operand1 == 0){
//         operand1 += bulletPointBtn.textContent
//         operand1 = operand1.replace('undefined','')
//         populateDisplay()
//     }
//     else{
//         operand1 += bulletPointBtn.textContent
//         operand1 = operand1.replace('undefined','')
//         populateDisplay()
//     }
// })

operatorBtns.forEach((operatorBtn)=>{
    operatorBtn.addEventListener('click',()=>{
        operator = operatorBtn.textContent
    })})

clearBtn.addEventListener('click',clearDisplay)

resultBtn.addEventListener('click',()=>{
    if(operand2){
        operate(operator,operand1,operand2)
    }
})

function populateDisplay(){
   if (operator === undefined){
    display.innerHTML = operand1
   }
   else if(operand2){
    display.innerHTML = operand2
   }
}

function clearDisplay(){
    operand1 = 0
    operand2 = 0
    operator = undefined
    populateDisplay()
}