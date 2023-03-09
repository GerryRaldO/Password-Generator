// Assignment Code
var generateBtn = document.querySelector("#generate");
var between = (x, min, max) => {
    return x >= min && x <= max;
  }
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w','x','y', 'z' ];
var numbers = [0,1,2,3,4,5,6,7,8,9,];
var char = ['!','@','#','$','%','^','&','*','(',')'];

var finalArray = [];
var randomChoice = Math.floor(Math.random() * finalArray.length);
var passLength 


var finalPass = "";



// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPass;
  console.log(finalPass);

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  question1()
  question2()
  question3()
  question4()
  question5()
  randomPassGen()
}

    /*
    Question 1
    How many chars in your Password?
    */
function question1() {
  passLength = prompt("How many characters do you want in your password?")
  if (between(passLength, 8, 128)) {
    alert('Thank you!');
  } else if (
      passLength < 8 ||
      passLength > 128
  ) {
    alert('Incorrect input. Please select a number between 8-128');
    return question1();
  } else {
    alert('Incorrect input. Please select a number');
    return question1();
  }
}
  
  
  
  
      /*
      Question 2
      Would you like uppercase letters?
      */
  function question2() {
    var upperResp=prompt('Would you like Uppercase letters in your password? Y/N')
    if(upperResp.toLowerCase() === 'y') {
      finalArray.push(...upperCase);
      alert('Thank you!');
    }
    else if (upperResp.toLocaleLowerCase() === 'n') {
      finalArray = finalArray
      alert('Thank you!');
    }
    else {
      alert('Incorrect input, Please enter Y/N')
      return question2();
    }
      }
  
      /*
      Question 3
      Would you like Lowercase letters?
      */ 
function question3 () {
  var lowerResp=prompt('Would you like Lowercase letters in your password? Y/N')
  if(lowerResp.toLowerCase() === 'y') {
    finalArray.push(...lowerCase);
    alert('Thank you!');
  }
  else if (lowerResp.toLocaleLowerCase() === 'n') {
    finalArray = finalArray
    alert('Thank you!');
  }
  else {
    alert('Incorrect input, Please enter Y/N')
    return question3();
  }
  }

      /*
      Question 4
      Would you like numbers?
      */
function question4 () {
  var numberResp=prompt('Would you like numbers in your password? Y/N')
  if(numberResp.toLowerCase() === 'y') {
    finalArray.push(...numbers);
    alert('Thank you!');
  }
  else if (numberResp.toLocaleLowerCase() === 'n') {
    finalArray = finalArray
    alert('Thank you!');
  }
  else {
    alert('Incorrect input, Please enter Y/N')
    return question4();
  }
    }

    
      /*
      Question 5
      Would you like special characters?
      */
function question5 () {
  var charResp=prompt('Would you like special characters in your password? Y/N')
  if(charResp.toLowerCase() === 'y') {
    finalArray.push(...char);
    alert('Thank you!');
  }
  else if (charResp.toLocaleLowerCase() === 'n') {
    finalArray = finalArray
    alert('Thank you!');
  }
  else {
    alert('Incorrect input, Please enter Y/N')
    return question5();
  }
    }

function randomPassGen() {

  for (var i = 0; i < passLength; i++) {
  var randomIndex = Math.floor(Math.random() * finalArray.length);

  var character = finalArray[randomIndex];

  finalPass = finalPass + character;

  }

}


