let lastVisited = window.localStorage.getItem("lastVisited");
let Display = document.querySelector("#lastVisited");
if (lastVisited) {
    let days = Math.round((Date.now() - lastVisited));
    Display.textContent = ` ${days} days ago.`;
} else {
    Display.textContent = ` for the first time today.`;
}