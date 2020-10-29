// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password generator
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = [0, 1, 2, 4, 5, 6, 7, 8, 9]; //dont need this most likely
var specials = ["\u0020", "\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027",
  "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B",
  "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F"
  , "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];

// Pulls random character from an array or string
function getRandomChar(arr) {
  var getRandom = Math.floor(Math.random()*arr.length);
  return arr[getRandom];
}

//Testing output    
//console.log(getRandomChar(letters));
//console.log(getRandomChar(numbers));    
//console.log(getRandomChar(specials));
//console.log(getRandomChar(letters).toUpperCase());

// Prompt the customer for password criteria
  //length between 8-124 characters
  //character types: lowercase, uppercase, numeric, and/or special characters
  //atleast one character type should be selected, else prompt again

function generatePassword() {
  var atleastOne = true; // Used to validate if user picked atleast one character type
  var password = []; // Array used to build password, allows characters at a certain index to be replaced
  var passwordString = ""; // String used for password output after array is complete
  while(atleastOne === true) {
    var howLong = prompt("How long do you want your password to be? (between 8-128 characters)");
    
    // Makes sure user input is between 8-128 before continuing 
    if(howLong >= 8 && howLong <= 128) { 
      // Variables to store user choices
      var confirmLCLetters = confirm("Do you want lowercase letters in your password?");
      var confirmUCLetters = confirm("Do you want uppercase letters in your password?");
      var confirmNumbers = confirm("Do you want numbers in your password?");
      var confirmSpecials = confirm("Do you want special characters in your password?");
    }
    else {
      alert("You must choose a password length between 8 and 128 characters. Click generate password to retry.");
      atleastOne = false // Ends the loop and directs user to retry if input is not between 8-128
      return "Your Secure Password"; // Makes sure display remains the same if password array is undefined
    }
    
    if(confirmUCLetters === false && confirmLCLetters === false && confirmNumbers === false && confirmSpecials === false) {
      console.log("You need to pick one atleast"); // testing output
      alert("You must choose atleast one character type for your password. Click generate password to retry.");
      atleastOne = false; // Ends the loop and directs user to retry if user does not choose atleast one character type
    }

    // Runs if user wants lowercase letters
    if(confirmLCLetters === true) {
      for(i=0; i< howLong; i++) { // Creates array with random lowercase letters
        password[i] = getRandomChar(letters);
      }
    }
    // Runs if user wants uppercase letters
    if(confirmUCLetters === true) {
      // Runs if user only wants uppercase letters
      if(confirmLCLetters === false) { 
        for(i=0; i< howLong; i++) { // Creates array with random uppercase letters
          password[i] = getRandomChar(letters).toUpperCase();
        } 
      }
      else {
        //alert("you made it to else UC");
        for(i=0; i< howLong; i++) { // Replaces a character at every 2 index places with a random uppercase letter
          if(i%2 === 0 && i < howLong) {
          password[i] = getRandomChar(letters).toUpperCase();
          }
        } 
      } 
    }
    // Runs if user wants numbers
    if(confirmNumbers === true) {
      if(confirmLCLetters === false && confirmUCLetters === false) {
      for(i=0; i< howLong; i++) { // Creates array with random numbers
        password[i] = getRandomChar(numbers); 
        }
      }
      else {
        //alert("you made it to else numbers");
        for(i=0; i< howLong; i++) { // Replaces a character at every 3 index places with a random number
          if(i%3 === 0 && i < howLong) {
          password[i] = getRandomChar(numbers);
          }
        } 
      }
    }
    // Runs if user wants special characters
    if(confirmSpecials === true) {
      if(confirmLCLetters === false && confirmUCLetters === false && confirmNumbers === false) {
        for(i=0; i< howLong; i++) { // Creates array with random special characters
          password[i] = getRandomChar(specials);
          }
        }
        else {
          //alert("you made it to else special");
          for(i=0; i< howLong; i++) { // Replaces a character at every 4 index places with a random special character
            if(i%4 === 0 && i < howLong) {
            password[i] = getRandomChar(specials);
            }
          } 
        }
      }
    // Creates a string with the completed array 
    for (i=0; i< howLong; i++) {
      passwordString += password[i];
    } return passwordString; 
   //console.log(password);
   atleastOne = false; // Ends the loop once password is completed
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



