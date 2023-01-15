var generateBtn = document.querySelector("#generate");
var passwordCriteria = {
lowercaseCharacters: "abcdefghijklmnopqrstuvwxyz".split(""),
uppercaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
numericTypes:"123456789".split(""),
specialTypes:[
  " ",
  '"',
  "'",
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
],
passwordLength: 0,
}

const addLowercaseCharacters = true;
const addUppercaseCharacters = true;
const addNumericTypes = true;
const addSpecialTypes = true;

const randomFunction = {
  special: getRandomSpecial,
  upper: getRandomUppercase,
  lower: getRandomLowercase,
  number: getRandomNumeric,
};

function getRandomLowercase() {
  return passwordCriteria.lowercaseCharacters[Math.floor(Math.random() * passwordCriteria.lowercaseCharacters.length)];
}

function getRandomUppercase() {
  return passwordCriteria.uppercaseCharacters[Math.floor(Math.random() * passwordCriteria.uppercaseCharacters.length)];
}

function getRandomNumeric() {
  return passwordCriteria.numericTypes[Math.floor(Math.random() * passwordCriteria.numericTypes.length)];
}

function getRandomSpecial() {
  return passwordCriteria.specialTypes[Math.floor(Math.random() * passwordCriteria.specialTypes.length)];
} 









// --------------------------------------------
function writePassword() {  
  var chooseLength = prompt("Choose a password length. Pick number between 8 and 128 to determine final character length.");

  if (chooseLength < 8 || chooseLength > 128 || !isFinite(chooseLength)) {
    alert("Whoopsie! Invalid entry. Please enter a number between 1 and 128.");
    return "Your secure password";
  } else {

  confirm("Do you wish to include lowercase types?");

  confirm("Do you wish to include uppercase types?");

  confirm("Do you wish to include numeric types?");

  confirm("Do you wish to include special types?");

  }


  passwordText.value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
