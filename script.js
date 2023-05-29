// Global Variables
// button
const myBtn = document.getElementById("submit-btn");

// input variables
const dayInput = document.getElementById("input-day");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");

// text content variables
const dayContent = document.getElementById("the-day");
const monthContent = document.getElementById("the-month");
const yearContent = document.getElementById("the-year");

// error variables

// individual error variables if the input is empty
const dayErrorF = document.getElementById("day-req");
const monthErrorF = document.getElementById("month-req");
const yearErrorF = document.getElementById("year-req");

// individual error variablse if the input is not valid
const dayVal = document.getElementById("day-valid");
const monthVal = document.getElementById("month-valid");
const yearVal = document.getElementById("year-valid");


// Validate the day
function validateDay() {
    const day = dayInput.value; 
    if (day === "") {
        dayErrorF.style.display = "block";        
    } else if(day < 1 || day > 31){
        dayVal.style.display = "block"
    } 
    else {
        dayVal.style.display = "none";
    }
}
  
  // Validate the month
function validateMonth() {
    const month = monthInput.value;
    if(month === ""){
        monthErrorF.style.display = "block";
    }
    else if (month < 1 || month > 12) {
        monthVal.style.display = "block";
    } else {
        monthVal.style.display = "none";
    }
}
  
  // Validate the year
function validateYear() {
    const year = yearInput.value;
    if (year === "") {
        yearErrorF.style.display = "block";
    } else if (year < 1970 || year > new Date().getFullYear()) {
        yearVal.style.display = "block";
    } else {
        yearVal.style.display = "none";
    }
}

// Calculate age
function calculateAge() {
    validateDay();
    validateMonth();
    validateYear();
  
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
  
    if (isNaN(day) || day < 1 || day > 31 || isNaN(month) || month < 1 || month > 12 || isNaN(year) || year < 1970) {
        return;
    }
  
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const ageDifference = currentDate - birthDate;
    const theDate = new Date(ageDifference);
    const years = theDate.getUTCFullYear() - 1970;
    const months = theDate.getUTCMonth();
    const days = theDate.getUTCDate() - 1;
  
    dayContent.textContent = days;
    monthContent.textContent = months;
    yearContent.textContent = years;
}

// Clear errors
function clearErrors() {
    dayErrorF.style.display = "none";
    monthErrorF.style.display = "none";
    yearErrorF.style.display = "none";
}
// Add event listeners
myBtn.addEventListener("click", calculateAge);
dayInput.addEventListener("input", clearErrors);
monthInput.addEventListener("input", clearErrors);
yearInput.addEventListener("input", clearErrors);