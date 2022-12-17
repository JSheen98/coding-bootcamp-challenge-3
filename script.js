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
  
// function that puts confirms on the page to have the user select what character types they want   
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
      // if user hasn't selected any type of character, it sends them back through the confirms until they select at least one type
      if (chars == '') {
        alert('NOTE: User must select AT LEAST 1 character type.')
        chooseCharacters()
      }
      console.log(chars)
      
  }

  function generatePassword() {
    chooseCharacters()
  }


  
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
//     chars = chars + lowercase
//   }
//   else {
//     chars
//   }
//   if (confirm("Would you like your password to contain uppercase letters?")) {
//     chars = chars + uppercase
//   }
//   else {
//     chars
//   }
//   if (confirm("Would you like your password to contain numbers?")) {
//     chars = chars + numeric
//   }
//   else {
//     chars
//   }
//   if (confirm("Would you like your password to contain special characters?")) {
//     chars = chars + specialChars
//   }
//   else {
//     chars
//   } 
//   // if user hasn't selected any type of character, it sends them back through the confirms until they select at least one type
//   if (chars == '') {
//     alert('NOTE: User must select AT LEAST 1 character type.')
//     chooseCharacters()
//   }
//   // return chars
//   console.log(chars)
  
// }

// chooseCharacters()