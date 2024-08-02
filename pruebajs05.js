// User profile

/*let name = prompt("Username:");
let age = prompt("Age:");
age = parseInt(age);

let fav1 = prompt("Favorite movies");
console.log("Username: " + name);
console.log("Age: " + age);
console.log("The film " + fav1 + " is one of my favorites");
*/

// Highest number
/*
function getMaxOfTenNumbers() {
    let numbers = [];
    let count = 10;

    
    while (count > 0) {
        const input = prompt("Ingresa un número");
        const number = parseFloat(input);

        
        if (!isNaN(number)) {
            numbers.push(number);
            count--;
        } else {
            alert("Número inválido");
        }
    }

    
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    console.log("El número mayor es " + maxNumber);
}

getMaxOfTenNumbers();

*/
// Alarm

/* function timer(){
let seconds = prompt("Tiempo de espera:");
time = parseInt(seconds,10);

setTimeout(() => {
    alert("Tiempo transcurrido");
}, time * 1000);

alert(`Alarma de ${time} segundos`);
}

timer();*/


// Palindrome

function isPalindrome(input) {
    // Remove punctuation, spaces, and convert to lowercase
    const cleanedInput = input
        .replace(/[^A-Za-z0-9]/g, '') // Remove non-alphanumeric characters
        .toLowerCase();

    // Check if the cleaned input is a palindrome
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
}

function checkPalindrome() {
    // Prompt the user for a word or sentence
    const input = prompt("Enter a word or sentence:");

    // Determine if the input is a palindrome
    if (isPalindrome(input)) {
        alert("The entered word or sentence is a palindrome.");
    } else {
        alert("The entered word or sentence is not a palindrome.");
    }
}

// Run the function to check if the input is a palindrome
checkPalindrome();


// Factorial

/* function factorial(n){
    if(n === 1){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

let n = prompt("Dame un número para calcular su factorial");
n = parseInt(n);
if(n < 1 ){
    console.log("Número inválido");
} else{
    console.log(factorial(n));
} */



// Flat array 
