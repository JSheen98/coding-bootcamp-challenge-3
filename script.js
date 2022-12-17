// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numeric = '1234567890'
  var specialChars = '!@#$%^&*()?<>'
  
  function chooseCharacters() {
    var chars = '';
    if (confirm("Would you like your password to contain lowercase letters?")) {
      chars = chars + lowercase
    }
    else {
      chars
    }
    if (confirm("Would you like your password to contain uppercase letters?")) {
      chars = chars + uppercase
    }
    else {
      chars
    }
    if (confirm("Would you like your password to contain numbers?")) {
      chars = chars + numeric
    }
    else {
      chars
    }
    if (confirm("Would you like your password to contain special characters?")) {
      chars = chars + specialChars
    }
    else {
      chars
    }
  }

  function generatePassword() {
    
  }

  chooseCharacters()
  
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

// var lowercase = 'abcdefghijklmnopqrstuvwxyz'
// var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var numeric = '1234567890'
// var specialChars = '!@#$%^&*()?<>'

// function chooseCharacters() {
//   var chars = '';
//   if (confirm("Would you like your password to contain lowercase letters?")) {
//     console.log(chars = chars + lowercase)
//   }
//   else {
//     console.log(chars = chars)
//   }
//   if (confirm("Would you like your password to contain uppercase letters?")) {
//     console.log(chars = chars + uppercase)
//   }
//   else {
//     console.log(chars = chars)
//   }
//   if (confirm("Would you like your password to contain numbers?")) {
//     console.log(chars = chars + numeric)
//   }
//   else {
//     console.log(chars = chars)
//   }
//   if (confirm("Would you like your password to contain special characters?")) {
//     console.log(chars = chars + specialChars)
//   }
//   else {
//     console.log(chars = chars)
//   }
// }

// chooseCharacters()