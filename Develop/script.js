var generateBtn = document.querySelector("#generate");
//created object to house arrays for various characters
var pwdCriteria = {
  lowercaseChar: "abcdefghijklmnopqrstuvwxyz".split(""),
  uppercaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  numTypes: "123456789".split(""),
  specTypes: [
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

// this function is initiated when the button is clicked
function writePassword() {
  // passwordText.value = password;
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // ^ removed this code as it wasn't necessary

  var totalChar = [];
  var generatedPwd = "";
  var chooseLength = prompt(
    "Choose a password length. Pick number between 8 and 128 to determine final character length."
  );

  //created parameters for password length. 

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

  //run password prompt function

  pwConfirms();

  //if then statements. Array.prototype.push.apply is necesarry to create 1 large array to randomly choose from.

  if (lowercase === true) {
    Array.prototype.push.apply(totalChar, pwdCriteria.lowercaseChar);
  }

  if (uppercase === true) {
    Array.prototype.push.apply(totalChar, pwdCriteria.uppercaseChar);
  }

  if (numeric === true) {
    Array.prototype.push.apply(totalChar, pwdCriteria.numTypes);
  }

  if (special === true) {
    Array.prototype.push.apply(totalChar, pwdCriteria.specTypes);
  }

  if (
    lowercase === false &&
    uppercase === false &&
    numericTypes === false &&
    specialTypes === false
  ) {
    alert(
      "You must select at least oneof the following: lowercase, uppercase, number or special characters"
    );
    pwConfirms();
    // created a for loop using Math.random to select random numbers of the totalChar array.
  } else {
    for (let index = 0; index < chooseLength; index++) {
      var random = Math.floor(Math.random() * totalChar.length);
      generatedPwd += totalChar[random];
    }
  }
  function pwConfirms() {
    lowercase = confirm("Do you wish to include lowercase types?");
    uppercase = confirm("Do you wish to include uppercase types?");
    numeric = confirm("Do you wish to add numbers?");
    special = confirm("Do you wish to include special types?");
  }
  document.getElementById("password").innerHTML = generatedPwd;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);
