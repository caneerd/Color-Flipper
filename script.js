const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const myButton = document.getElementById("btnColorChanger");

const myColorSpan = document.getElementById("myColorSpan");

function getRandomHexChar(){
  return Math.floor(Math.random()*hex.length);
}

myButton.addEventListener("click", function(){
  let hexColor = '#';
  for(let i=0;i<6;i++){
  hexColor += hex[getRandomHexChar()];
}

myColorSpan.innerHTML=hexColor;
document.body.style.backgroundColor=hexColor;
});