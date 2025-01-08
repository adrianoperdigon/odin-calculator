function calculate(operator, num1, num2) {
    if (operator === '+') {
        return add(parseFloat(num1), parseFloat(num2))
    } else if (operator === '-') {
        return subtract(parseFloat(num1), parseFloat(num2))
    } else if (operator === '*') {
        return multiply(parseFloat(num1), parseFloat(num2))
    } else if (operator === '/') {
        return divide(parseFloat(num1), parseFloat(num2))
    }
}

function add(num1, num2) {
    return parseFloat((num1 + num2).toFixed(7))
}

function subtract(num1, num2) {
    return parseFloat((num1 - num2).toFixed(7))
}

function multiply(num1, num2) {
    return parseFloat((num1 * num2).toFixed(7))
}

function divide(num1, num2) {
    if (num2 === 0) {
        DISPLAY.innerHTML = "ERROR!"
        return null
    } else {
        return parseFloat((num1 / num2).toFixed(7))
    }
}

let OPERATION
let FIRSTNUMBERS = 0
let SECONDNUMBERS = undefined

let numberButtons = document.querySelectorAll('#main_wrapper__number_container button')
let operationButtons = document.querySelectorAll('#main_wrapper__operation_buttons_container button')
let DISPLAY = document.querySelector('#display')
let CLEAR = document.querySelector('#clear')
let EQUAL = document.querySelector('#equal')
let BULLETPOINT = document.querySelector("#number\\.")

function populateDisplay() {
    DISPLAY.innerHTML = FIRSTNUMBERS

    numberButtons.forEach((numberBtn) => {
        numberBtn.addEventListener('click', () => {
            if (FIRSTNUMBERS === 0 || FIRSTNUMBERS === "0") {
                FIRSTNUMBERS = numberBtn.textContent
                DISPLAY.innerHTML = FIRSTNUMBERS
            } else if (OPERATION == undefined) {
                if (numberBtn === BULLETPOINT && FIRSTNUMBERS.includes('.')) {
                } else {
                    FIRSTNUMBERS += numberBtn.textContent
                    DISPLAY.innerHTML = FIRSTNUMBERS
                }
            } else if (OPERATION != undefined) {
                if (SECONDNUMBERS === undefined) {
                    SECONDNUMBERS = numberBtn.textContent
                    DISPLAY.innerHTML = SECONDNUMBERS
                } else {
                    if (numberBtn === BULLETPOINT && SECONDNUMBERS.includes('.')) {
                    } else {
                        SECONDNUMBERS += numberBtn.textContent
                        DISPLAY.innerHTML = `${SECONDNUMBERS}`
                    }
                }
            }
        })
    })

    operationButtons.forEach((operationBtn) => {
        operationBtn.addEventListener('click', () => {
            if (SECONDNUMBERS != undefined) {
                FIRSTNUMBERS = calculate(OPERATION, FIRSTNUMBERS, SECONDNUMBERS)
                DISPLAY.innerHTML = FIRSTNUMBERS
                SECONDNUMBERS = undefined
            }
            OPERATION = operationBtn.textContent
        })
    })

    EQUAL.addEventListener('click', () => {
        if (OPERATION === "/" && SECONDNUMBERS == 0) {
            DISPLAY.innerHTML = "ERROR!"
        } else if (OPERATION && FIRSTNUMBERS && SECONDNUMBERS != undefined) {
            const result = calculate(OPERATION, FIRSTNUMBERS, SECONDNUMBERS)
            if (result !== null) {
                DISPLAY.innerHTML = result
                FIRSTNUMBERS = result
                SECONDNUMBERS = undefined
                OPERATION = undefined
            }
        }
    })

    CLEAR.addEventListener('click', () => {
        clearDisplay()
    })
}
populateDisplay()

function clearDisplay() {
    OPERATION = undefined
    FIRSTNUMBERS = 0
    SECONDNUMBERS = undefined
    DISPLAY.innerHTML = FIRSTNUMBERS
}
