// Function to append clicked button value to display
function append(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation
function calculate() {
    let display = document.getElementById('display');
    let equation = display.value;
    let result;

    try {
        result = eval(equation); // Using eval to evaluate the string as a JavaScript expression
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
