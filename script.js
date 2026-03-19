/* ============================================================
   CALCULATOR JAVASCRIPT - STUDENT INSTRUCTIONS
   Fill in the blanks (________) to make calculator work!
   ============================================================ */

/* ------------------------------------------------------------
   STEP 1: SELECT ELEMENTS FROM THE DOM
   ------------------------------------------------------------ */
const screen = document.getElementById("calcScreen");
const numberButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".sign");
const equalButton = document.querySelector(".signEqual");
const clearButton = document.getElementById("clearButton");
const deleteButton = document.getElementById("deleteButton");

/* ------------------------------------------------------------
   STEP 2: STATE VARIABLES
   These remember what the user is typing
   ------------------------------------------------------------ */
let currentValue = "0";     // What shows on screen right now
let previousValue = "";     // First number (before operator)  
let currentOperator = null; // Which operator was clicked (+, -, *, /)

/* ------------------------------------------------------------
   STEP 3: UPDATE SCREEN FUNCTION
   Call this every time currentValue changes
   ------------------------------------------------------------ */
function updateScreen() {
  // TODO: Set screen text to show currentValue
  screen.________ = currentValue;
}

/* ------------------------------------------------------------
   STEP 4: HANDLE NUMBER BUTTONS (0-9)
   ------------------------------------------------------------ */
function handleNumberClick(digit) {
  // If screen shows "0", REPLACE it with new digit
  if (currentValue === "0") {
    currentValue = digit;
  } else {
    // Otherwise ADD digit to END of currentValue
    currentValue += ________;
  }
  
  updateScreen();
}

/* ------------------------------------------------------------
   STEP 5: HANDLE OPERATORS (+ - * /)
   ------------------------------------------------------------ */
function handleOperatorClick(operator) {
  // Save current number as "first number"
  previousValue = currentValue;
  
  // Remember which operator clicked
  currentOperator = ________;
  
  // Reset for second number
  currentValue = "0";
}

/* ------------------------------------------------------------
   STEP 6: DO THE MATH
   ------------------------------------------------------------ */
function performCalculation() {
  // Convert strings → numbers
  const firstNum = parseFloat(previousValue);
  const secondNum = parseFloat(currentValue);
  let result;
  
  // Math time!
  if (currentOperator === "+") {
    result = firstNum + secondNum;
  } else if (currentOperator === "-") {
    result = firstNum - ________;
  } else if (currentOperator === "*") {
    result = firstNum * secondNum;
  } else if (currentOperator === "/") {
    // CHALLENGE: Handle divide by zero!
    if (secondNum === 0) {
      currentValue = "ERROR";
    } else {
      result = firstNum / ________;
    }
  }
  
  currentValue = String(result);
  previousValue = "";
  currentOperator = null;
  updateScreen();
}

/* ------------------------------------------------------------
   STEP 7: CONNECT ALL BUTTONS
   ------------------------------------------------------------ */

// Numbers 0-9
numberButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const digit = btn.________;  // Get button text
    handleNumberClick(digit);
  });
});

// Operators (+ - * / .)
opButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const value = btn.textContent;
    
    // BONUS: Decimal point
    if (value === ".") {
      if (!currentValue.includes(".")) {
        currentValue += ".";
        updateScreen();
      }
      return;
    }
    
    handleOperatorClick(________);
  });
});

// Equals (=)
equalButton.addEventListener("click", function() {
  if (previousValue !== "" && currentOperator !== null) {
    performCalculation();
  }
});

// Clear (AC)
clearButton.addEventListener("click", function() {
  currentValue = "0";
  previousValue = "";
  currentOperator = null;
  updateScreen();
});

// Delete
deleteButton.addEventListener("click", function() {
  if (currentValue.length === 1) {
    currentValue = "0";
  } else {
    currentValue = currentValue.________(0, -1);  // Remove last char
  }
  updateScreen();
});
