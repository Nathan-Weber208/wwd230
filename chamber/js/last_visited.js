let dnow = Date.now()
window.localStorage.setItem("lastVisited",dnow)
let lastVisited = window.localStorage.getItem("lastVisited");

let Display = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    // make sure days is a whole number
    days = Math.floor(days / (1000 * 60 * 60 * 24));
    // if days is 0, then it's today
    if (days === 0) {
        Display.innerHTML = " today.";
    }
    else {
        Display.textContent = ` ${days} days ago.`;
    }
} else {
    Display.textContent = ` for the first time today.`;
}