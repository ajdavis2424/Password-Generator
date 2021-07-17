// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var pwLength = prompt(
      "Choose a password length between 8 and 128 characters "
    );
    console.log(pwLength);
    var pwNumbers = confirm("Would you like to use numbers?");
    console.log(pwNumbers);
    var pwLowercase = confirm("Would you like to use lowercase?");
    console.log(pwLowercase);
    var pwUppercase = confirm("Would you like to use uppercase?");
    console.log(pwUppercase);
    var pwSpecial = confirm("Would you like to use special characters?");
    console.log(pwSpecial);
  
    // .split splits my strings into substrings----.toUpperCase causes letters to be upper
    var randomChoices = [];
    console.log(randomChoices);
    var numberarr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    console.log(numberarr);
    var lower = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(lower);
    var upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    console.log(upper);
    var special = ["!", "@", "#", "$", "%", "*", "<", "^", "<"];
    console.log(special);
    var storePw = "";
    console.log(storePw);
  
    if (pwNumbers) {
      randomChoices = randomChoices.concat(numberarr);
    }
    if (pwLowercase) {
      randomChoices = randomChoices.concat(lower);
    }
    if (pwUppercase) {
      randomChoices = randomChoices.concat(upper);
    }
    if (pwSpecial) {
      randomChoices = randomChoices.concat(special);
    }
    console.log("randomChoices line 53", randomChoices);
    for (var i = 0; i < parseInt(pwLength); i++) {
      var ran = Math.floor(Math.random() * randomChoices.length);
      storePw = storePw + randomChoices[ran];
      console.log(ran);
    }
    return storePw;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
