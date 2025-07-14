function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
    // also add it to an array 
   



}

let inputarray = [];
    
function clearDisplay() {
    display.value = '';
console.log(display.value);}

function appendToArray(value, operator) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '0';
    }
    if (display.value !== '') {
        inputarray.push(display.value);
        inputarray.push(operator);
        display.value = '';
        console.log(inputarray);
    } else {
        console.log('No value to append');
    }
}





function calculate(arr) {
    inputarray.push(display.value); // Add the last value in display to the array
    // Convert strings to proper types
    display.value = '';
    const tokens = arr.map(token => isNaN(token) ? token : Number(token));

    // Step 1: Handle multiplication and division first
    let i = 0;
    while (i < tokens.length) {
        if (tokens[i] === '*' || tokens[i] === '/') {
            const left = tokens[i - 1];
            const right = tokens[i + 1];
            let result;

            if (tokens[i] === '*') result = left * right;
            else if (tokens[i] === '/') result = left / right;

            tokens.splice(i - 1, 3, result); // Replace [left, op, right] with result
            i = 0; // Reset index to start
        } else {
            i++;
        }
    }

    // Step 2: Handle addition and subtraction
    i = 0;
    while (i < tokens.length) {
        if (tokens[i] === '+' || tokens[i] === '-') {
            const left = tokens[i - 1];
            const right = tokens[i + 1];
            let result;

            if (tokens[i] === '+') result = left + right;
            else if (tokens[i] === '-') result = left - right;

            tokens.splice(i - 1, 3, result);
            i = 0; // Reset index to start
        } else {
            i++;
        }
    }

    // return tokens[0];
 console.log('Final result:', tokens[0]);
    display.value = tokens[0];
    inputarray = []; // Clear the input array after calculation  

}
