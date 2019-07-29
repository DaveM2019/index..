// calculator

//Global vars

var num1 = "";
var num2 = "";
var operator;
var flag = 0; //false
var display = document.getElementById("display");
var equalTo = 0; //false

//function setNumber(value)

function setValue(number){
    if(equalTo === 1){
      clearButton();
    }
    if(flag === 0){
      num1+= number;
    //  alert(num1);
      display.innerHTML+= number;

  }
    else{
        num2+= number;
        display.innerHTML+= number;
      if(num1.length > 10 || num2.length > 10){
        display.innerHTML= "Max limit of digits reached"
      }
    }
}//end of function

// function oppClick(numericCode)
function oppClick(numericCode) {
    operator = numericCode;
    var oppString = "";
    flag = 1;
      if(operator === 4){
          display.innerHTML+= "/";
          oppString = "/";
    }else if(operator === 3){
          display.innerHTML+= "*";
          oppString = "*";
    }else if(operator === 2){
          display.innerHTML+= "-";
          oppString = "-";
    }else{
          display.innerHTML+= "+";
          oppString = "+";

    }//end of else block

    //below is supposed to stop you from hitting multiple operators and them displaying
    if(flag === 1){
      display.innerHTML = num1 + oppString;
    }//end of if
    //below is supposed to stop you from starting a calculation with an operator
    if(flag === 1 && num1 === ""){
      clearButton();
    }//end of if
    //below is supposed to clear the screen if an equal sign is pressed after an operator button is clicked
    if(equalTo === 1){
      clearButton();
    }//end of if

}//end of function oppClick(numericCode)

//function equalClick

function equalClick(){
    equalTo = 1;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";

    switch(true){
    case(operator === 1):
      result = num1 + num2;
      break;
    case(operator === 2):
      result = num1 - num2;
      break;
    case(operator === 3):
      result = num1 * num2;
      break;
    case(operator === 4):
      result = num1 / num2;
    } //end of switch
//decimal set
roundedResult = result.toFixed(4);
display.innerHTML = roundedResult;
//fixes example 0/0
    if(roundedResult === "NaN"){
    display.innerHTML = "Not a valid Calculation";
    }
} //end of function equalClick
// clearButton function below
function clearButton(){
  num1 = "";
  num2 = "";
  flag = 0;
  display.innerHTML = "";
  equalTo = 0;
} // end of function clearButton
// delete Button like Backspace below
function backspace(){
  var temp1 = "";
  var temp2 = "";
  if(equalTo === 1){
    clearButton();
  } // end of if
  if(flag === 0){
    temp1 = num1.substring(0, num1.length-1);
    alert(temp1);
    display.innerHTML = temp1;
    num1 = temp1;
  } // end of if
  if(flag === 1){
    display.innerHTML = num1;
    flag = 0;
  } //end of if
  if(num2 !== ""){
      temp2 = num2.substring(0, num2.length-1);
      display.innerHTML = num1 + operator + num2;
      num2 = temp2;
      flag = 1;
setOppString();
/*
      if (operator === 1) {
      display.innerHTML = num1 + "+" + num2;
      } else if (operator === 2) {
      display.innerHTML = num1 + "-" + num2;
      } else if (operator === 3) {
      display.innerHTML = num1 + "*" + num2;
      } else if (operator === 4) {
      display.innerHTML = num1 + "/" + num2;
      } //end of if operator and innerHTML
*/

  } //end of if

} //end of function Backspace

// function setDecimal point
function setDecimal(){
  if(flag === 0){ // beg of if
    if(num1 === ""){ // beg of 1st if
      num1 = "0.";
      display.innerHTML = num1;
    } // end of 1st if
    if(num1.indexOf('.') === -1){
      num1+= ".";
      display.innerHTML = num1;
    } //end of 2nd if
  } // end of if
    if(flag === 1){
      if(num2 === ""){
        num2 = "0.";
        display.innerHTML+= num2;
      } // end of 1st if

    if(num2.indexOf('.') === -1){
      num2+= ".";
      display.innerHTML = num1 +operator + num2;
setOppString();
/*
      if (operator === 1) {
      display.innerHTML = num1 + "+" + num2;
      } else if (operator === 2) {
      display.innerHTML = num1 + "-" + num2;
      } else if (operator === 3) {
      display.innerHTML = num1 + "*" + num2;
      } else if (operator === 4) {
      display.innerHTML = num1 + "/" + num2;
      } //end of if operator and innerHTML
*/
    }
    }
} //end of function

function setOppString(){
  if (operator === 1) {
  display.innerHTML = num1 + "+" + num2;
  } else if (operator === 2) {
  display.innerHTML = num1 + "-" + num2;
  } else if (operator === 3) {
  display.innerHTML = num1 + "*" + num2;
  } else if (operator === 4) {
  display.innerHTML = num1 + "/" + num2;
  } //end of if operator and innerHTML

} // end of setOppString

// END OF CALCULATOR

/*
if (operator === 1) {
display.innerHTML = num1 + "+" + num2;
} else if (operator === 2) {
display.innerHTML = num1 + "-" + num2;
} else if (operator === 3) {
display.innerHTML = num1 + "*" + num2;
} else if (operator === 4) {
display.innerHTML = num1 + "/" + num2;
} //end of if operator and innerHTML
*/
