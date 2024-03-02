document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const passwordDisplay = document.getElementById('password-display');
    const passwordLengthRange = document.getElementById('password-length');
    const passwordLengthValue = document.getElementById('password-length-value');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    
    generateBtn.addEventListener('click', generatePassword);

    copyBtn.addEventListener('click', copyPassword);

 
    passwordLengthRange.addEventListener('input', updatePasswordLengthDisplay);

    
    function generatePassword() {
        const length = parseInt(passwordLengthRange.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const password = generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

        passwordDisplay.textContent = password;
    }

 
    function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
        let charset = '';
        let password = '';

        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+{}[]|\\;:\'",.<>?';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        return password;
    }


    function updatePasswordLengthDisplay() {
        passwordLengthValue.textContent = passwordLengthRange.value;
    }


    function copyPassword() {
        const password = passwordDisplay.textContent;
        if (password) {
            navigator.clipboard.writeText(password)
                .then(() => alert('Password copied to clipboard'))
                .catch(err => console.error('Failed to copy password: ', err));
        } else {
            alert('No password generated');
        }
    }
});
