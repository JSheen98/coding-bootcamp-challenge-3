// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeric = '1234567890';
  var specialChars = '!@#$%^&*()?<>';

  function generatePassword() {
    var retVal = '';
    var length = 0;
    numberOfCharactersCheck()
    chars = characterTypeSelectionCheck();

  
  // function that puts confirms on the page to have the user select what character types they want   
    function characterTypeSelectionCheck() {
      var chars = '';
      
      if (confirm("Would you like your password to contain lowercase letters?")) {
        chars += lowercase
      }
      else {chars}
      
      if (confirm("Would you like your password to contain uppercase letters?")) {
        chars += uppercase
      }
      else {chars}
      
      if (confirm("Would you like your password to contain numbers?")) {
        chars += numeric
      }
      else {chars}
      
      if (confirm("Would you like your password to contain special characters?")) {
        chars += specialChars
      }
      else {chars} 

      // if user hasn't selected any type of character, it sends them back through the confirms until they select at least one type
      if (chars == '') {
        alert('NOTE: User must select AT LEAST 1 character type.')
        characterTypeSelectionCheck()
      }
      else {
        console.log(chars)
        return chars
      }
    }
    


    // Function that allows user to select number of characters in their password
    function numberOfCharactersCheck() {
      var numberOfCharactersPrompt = +prompt("How many characters would you like your password to have?");
        
        if (numberOfCharactersPrompt < 8) {
          (alert("Password must at least 8 characters"))
          numberOfCharactersCheck()
        }
        else if (numberOfCharactersPrompt > 128) {
          alert("Password can't contain more than 128 characters")
          numberOfCharactersCheck()
        }
        // If user selects an input that is not a number, it resets the prompt
        else if (isNaN(numberOfCharactersPrompt)) {
          alert("User must input a number")
          numberOfCharactersCheck()
        }
        else {
          length += numberOfCharactersPrompt
          console.log(length)
          return length
        }
    }

    for (var i = 0, n = chars.length; i < length; i++) {
      retVal += chars.charAt(Math.floor(Math.random() * n))
    }
    return retVal

  }
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// // Testing chooseCharacters function
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
//   else {
//   // return chars
//   console.log(chars)
//   }
  
// }

// chooseCharacters()