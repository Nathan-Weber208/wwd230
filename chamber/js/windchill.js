
// let ip1 = document.getElementById('inputone').value;
// let t = parseFloat(ip1);
// let ip2 = document.getElementById('inputtwo').value;
// let s = parseFloat(ip2);
let s = 20
let t = 60
  
let f = Math.round(0.0817*(3.71*(Math.pow(s, 0.5))+5.81-0.25*s)*(t-91.4)+91.4);
document.getElementById('Windchill').innerHTML =f;  