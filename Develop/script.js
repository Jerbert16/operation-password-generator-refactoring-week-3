var generateBtn = document.querySelector("#generate");
var passwordCriteria = {
  lowercaseCharacters: "abcdefghijklmnopqrstuvwxyz".split(""),
  uppercaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  numericTypes: "123456789".split(""),
  specialTypes: [
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
};
var passwordLength = 0;
var lowercase = true;
var uppercase = true;
var numericTypes = true;
var specialTypes = true;

const randomFunction = {
  special: getRandomSpecial,
  upper: getRandomUppercase,
  lower: getRandomLowercase,
  number: getRandomNumeric,
};

function getRandomLowercase() {
  return passwordCriteria.lowercaseCharacters[
    Math.floor(Math.random() * passwordCriteria.lowercaseCharacters.length)
  ];
}

function getRandomUppercase() {
  return passwordCriteria.uppercaseCharacters[
    Math.floor(Math.random() * passwordCriteria.uppercaseCharacters.length)
  ];
}

function getRandomNumeric() {
  return passwordCriteria.numericTypes[
    Math.floor(Math.random() * passwordCriteria.numericTypes.length)
  ];
}

function getRandomSpecial() {
  return passwordCriteria.specialTypes[
    Math.floor(Math.random() * passwordCriteria.specialTypes.length)
  ];
}

// --------------------------------------------

function writePassword() {
  var chooseLength = prompt(
    "Choose a password length. Pick number between 8 and 128 to determine final character length."
  );

  if (chooseLength === null) {
    return;
  } else if (
    chooseLength < 8 ||
    chooseLength > 128 ||
    !isFinite(chooseLength)
  ) {
    alert("Whoopsie! Invalid entry. Please enter a number between 1 and 128.");
    return;
  }

  pwConfirms();

  if (lowercase === false && uppercase === false && numericTypes === false && specialTypes === false) {
    alert("You must select at least oneof the folloeing: lowercase, uppercase, number or special characters");
    pwConfirms();
  }
  
    if (lowercase === true && passwordCriteria.passwordLength < chooseLength) {
      console.log("yay");
    } else {
      console.log("nah");
    }

    if (uppercase === true) {
      console.log("yay");
    } else {
      console.log("nah");
    }

    if (numericTypes === true) {
      console.log("yay");
    } else {
      console.log("nah");
    }

    if (specialTypes === true) {
      console.log("yay");
    } else {
      console.log("nah");
    }

  

  passwordText.value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function pwConfirms() {
  lowercase = confirm("Do you wish to include lowercase types?");
  uppercase = confirm("Do you wish to include lowercase types?");
  numericTypes = confirm("Do you wish to add numbers?");
  specialTypes = confirm("Do you wish to include special types?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
