function generatePassword() {
    const length = +document.getElementById('length').value;
    const includeUpper = document.getElementById('uppercase').checked;
    const includeLower = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
  
    const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerSet = 'abcdefghijklmnopqrstuvwxyz';
    const numberSet = '0123456789';
    const symbolSet = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let allChars = '';
    let password = '';
  
    if (includeUpper) {
      allChars += upperSet;
      password += getRandomChar(upperSet);
    }
    if (includeLower) {
      allChars += lowerSet;
      password += getRandomChar(lowerSet);
    }
    if (includeNumbers) {
      allChars += numberSet;
      password += getRandomChar(numberSet);
    }
    if (includeSymbols) {
      allChars += symbolSet;
      password += getRandomChar(symbolSet);
    }
  
    if (allChars === '') {
      document.getElementById('password').textContent = 'Please select at least one option.';
      return;
    }
  
    for (let i = password.length; i < length; i++) {
      password += getRandomChar(allChars);
    }
  
    // Shuffle the password
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
  
    document.getElementById('password').textContent = password;
  }
  
  function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
  }
  