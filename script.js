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

const dayLabel = document.querySelector("label[for=input-day]");
const monthLabel = document.querySelector('label[for="input-month"]');
const yearLabel = document.querySelector('label[for="input-year"]');

// Validate the day
function validateDay() {
    const day = dayInput.value;
    if (day === "") {
      dayErrorF.style.display = "block";
      dayInput.style.outline = "1px solid hsl(0, 100%, 67%)";
      dayLabel.style.color = "hsl(0, 100%, 67%)";
      dayVal.style.display = "none";
      dayErrorF.style.animation = "wiggle .5s ease-in-out";
    } else if (day < 1 || day > 31) {
      dayVal.style.display = "block";
    } else {
      dayInput.style.outline = "1px solid hsl(0, 1%, 44%)";
      dayLabel.style.color = "hsl(0, 1%, 44%)";
      dayVal.style.display = "none";
      dayErrorF.style.animation = "";
    }
  }
  
  // Validate the month
  function validateMonth() {
    const month = monthInput.value;
    if (month === "") {
      monthErrorF.style.display = "block";
      monthInput.style.outline = "1px solid hsl(0, 100%, 67%)";
      monthLabel.style.color = "hsl(0, 100%, 67%)";
      monthVal.style.display = "none";
      monthErrorF.style.animation = "wiggle .5s ease-in-out";
    } else if (month < 1 || month > 12) {
      monthVal.style.display = "block";
    } else {
      monthVal.style.display = "none";
      monthInput.style.outline = "1px solid hsl(0, 1%, 44%)";
      monthLabel.style.color = "hsl(0, 1%, 44%)";
      monthErrorF.style.animation = "";
    }
  }
  
  // Validate the year
  function validateYear() {
    const year = yearInput.value;
    if (year === "") {
      yearErrorF.style.display = "block";
      yearInput.style.outline = "1px solid hsl(0, 100%, 67%)";
      yearLabel.style.color = "hsl(0, 100%, 67%)";
      yearVal.style.display = "none";
      yearErrorF.style.animation = "wiggle .5s ease-in-out";
    } else if (year < 1970 || year > new Date().getFullYear()) {
      yearVal.style.display = "block";
    } else {
      yearVal.style.display = "none";
      yearInput.style.outline = "1px solid hsl(0, 1%, 44%)";
      yearLabel.style.color = "hsl(0, 1%, 44%)";
      yearErrorF.style.animation = "";
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
myBtn.addEventListener("click", () => {
    calculateAge();
    dayContent.classList.remove("number-text");
    monthContent.classList.remove("number-text");
    yearContent.classList.remove("number-text");
    setTimeout(function () {
    dayContent.classList.add("number-text");
    monthContent.classList.add("number-text");
    yearContent.classList.add("number-text");
  }, 10);
});

dayInput.addEventListener("input", clearErrors);
monthInput.addEventListener("input", clearErrors);
yearInput.addEventListener("input", clearErrors);