"use strict";
// Beginning code for TS
let newYear;
newYear = document.getElementById("year");
let thisNewYear;
thisNewYear = new Date().getFullYear().toString();
if (newYear) {
    newYear.setAttribute("datetime", thisNewYear);
    newYear.textContent = thisNewYear;
}
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
