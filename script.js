// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pwLength = prompt{
    "Choose a password length between 8 and 128 charecters"
    );
    console.log(pwLength);
    var pwNumbers = confirm("Would you like to use numbers??");
    
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
