// Get DOM elements
const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare with the reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Handle button click
checkBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();

    if (inputText === '') {
        alert('Please input a value.');
    } else {
        const isPalindromic = isPalindrome(inputText);
        const resultText = isPalindromic
            ? `${inputText} is a palindrome.`
            : `${inputText} is not a palindrome.`;

        // Show the result in the #result element
        resultElement.textContent = resultText;
        resultElement.classList.remove('hidden'); // Show the result

        // Show the entered word inside <strong>
        const strongElement = document.querySelector('.user-input strong');
        strongElement.textContent = inputText;
    }
});


/*
Obtenemos los elementos del DOM (input, botón y resultado).

Definimos una función isPalindrome que verifica si una cadena es un palíndromo.

Al hacer clic en el botón, verificamos si el texto ingresado es un palíndromo y mostramos el resultado en el elemento #result.
*/