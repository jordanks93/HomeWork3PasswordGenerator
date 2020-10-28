// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for password generator
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = [0, 1, 2, 4, 5, 6, 7, 8, 9];
var specials = ["\u0020", "\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027",
  "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B",
  "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F"
  , "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];

// Prompt the customer for password criteria
  //length between 8-124 characters
  //character types: lowercase, uppercase, numeric, and/or special characters
  //atleast one character type should be selected, else prompt again

function generatePassword() {
  var atleastOne = true; // validates if user picked atleast one character type
  while(atleastOne === true) {
    var howLong = prompt("How long do you want your password to be? (between 8-128 characters)");
    // makes sure input is between 8-128 before continuing 
    if(howLong >= 8 && howLong <= 128) { 
      var confirmUCLetters = confirm("Do you want uppercase letters in your password?");
      var confirmLCLetters = confirm("Do you want lowercase letters in your password?");
      var confirmNumbers = confirm("Do you want numbers in your password?");
      var confirmSpecial = confirm("Do you want special characters in your password?");
    }
    else {
      alert("You must choose a password length between 8 and 128 characters. Click generate password to retry.");
      atleastOne = false
    }
    
    if(confirmUCLetters === false && confirmLCLetters === false && confirmNumbers === false && confirmSpecial === false) {
      console.log("You need to pick one atleast");
      atleastOne = false;
    }
    
    atleastOne = false;
    
  } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

for(i=0; i< specials.length; i++) {
  console.log(specials[i]);
}
