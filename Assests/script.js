
  
  //  to prompt user for Function
  function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How many characters would you like your password to contain?')
    );
  
    // Conditional check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
      alert('Password length must less than 129 characters');
      return;
    }
  
    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialText = confirm(
      'Click OK to confirm including special characters.'
    );
  
    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
      'Click OK to confirm including numeric characters.'
    );
  
    // Variable to store boolean regarding the inclusion of lowercaseletter characters
    var hasLowerCaseLetterdCharacters = confirm(
      'Click OK to confirm including lowercaseletter characters.'
    );
  
    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
      'Click OK to confirm including uppercase characters.'
    );
  
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
      hasSpecialText === false &&
      hasNumericCharacters === false &&
      hasLowerCaseLetterdCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert('Must select at least one character type');
      return;
    }
  
    // Object to store user input
    var passwordOptions = {
      length: length,
      hasSpecialText: hasSpecialText,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCaseLetterdCharacters: hasLowerCaseLetterdCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  
    return passwordOptions;
  }
  
  //random e array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  //  user input
  function generatePassword() {
    var options = getPasswordOptions();
    var result = [];

    var possibleCharacters = [];
    var guaranteedCharacters = [];
    // Push new random special character to guaranteedCharacters
    if (options.hasSpecialText) {
      possibleCharacters = possibleCharacters.concat(specialText);
      guaranteedCharacters.push(getRandom(specialText));
    }

    // Push new random special character to guaranteedCharacters
    if (options.hasNumericCharacters) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
    }
  
    // Conditional statement that adds array of lowercaseletter characters
    if (options.hasLowerCaseLetterdCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCaseLetterdCharacters);
      guaranteedCharacters.push(getRandom(lowerCaseLetterdCharacters));
    }
  
    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }
  
    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  
    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  
    // Transform the result into a string and pass into writePassword
    return result.join('');
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
//  special characters array
var specialText = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercaseletter characters 
  var lowerCaseLetter = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];