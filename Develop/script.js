// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseCharacters =  "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numericTypes = "123456789".split("");
const specialTypes = [" ", "\"", "\'", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

const addlowercaseCharacters = true;
const adduppercaseCharacters = true;
const addnumericTypes = true;
const addspecialTypes = true;  

const maxPasswordLength = 129;

// Write password to the #password input
function writePassword() {

  for (let index = 8; index < maxPasswordLength; index++) {
    console.log(index);
  }

  let chooseLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters");
  
  confirm("Do you wish to include lowercase types?");
  
  confirm("Do you wish to include uppercase types?");
  
  confirm("Do you wish to include numeric types?");
  
  confirm("Do you wish to include special types?");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

