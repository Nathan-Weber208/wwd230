let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "friday",
    "saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new date();
let dayname = daynames[d.getDay()];
let monthname = months[d.getMonth()];
let year = d.getfullyear();
let fulldate = dayname + ", " + monthname + " " + d.getDate() + ", " + d.getFullYear();
let test = "today"
document.getElementById("currentdate").innerHTML = test;
