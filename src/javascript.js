// the original way:
// let colors = ['crimson', 'blue', 'cyan', 'greenyellow', 'brown'];
// let usedColors = [];

// function randomc() {
//   if (usedColors.length === colors.length) {
//     // All colors have been used, reset the usedColors array
//     usedColors = [];
//   }

//   let randomColor;
//   do {
//     randomColor = Math.floor(Math.random() * colors.length);
//   } while (usedColors.includes(randomColor));

//   usedColors.push(randomColor);
//   return colors[randomColor];
// }

// function ccbtn() {
//   let div = document.getElementById("color-changer");
//   var setColor = randomc();
//   div.style.backgroundColor = setColor;
// }

// the easy way + more random colors:
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let div = document.getElementById("color-changer");
    div.style.backgroundColor ="#" + randomColor;
    let color_note = document.getElementById("color-note");
    color_note.innerHTML = "current background color = " + "#" + randomColor;
}
function ccbtn(){
    setBg();
}