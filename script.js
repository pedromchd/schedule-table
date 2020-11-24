// function perCent(value, total, dia) {
//   // pC = 0;
//   pC += value / total * 100;
//   document.getElementById(week[dia - 2]).innerHTML = `${Math.round(pC)}%`
// }
// function calc() {
//   // document.querySelector('td:nth-child(3) button').innerHTML = 'Hello!';
//   perCent(1, 5, 4);
// }

function buttonOnClick(button, value, dia) {
  button.onclick = function perCent() {
    pC = 0;
    pC += value;
    document.getElementById(week[dia]).innerHTML = `${Math.round(pC)}%`
  };
}
function getNthButton () {
  let buttonList = [];
  for (let i = 2; i <= 6; i++) {
    buttonList.push(document.querySelectorAll(`td:nth-child(${i}) button`));
  }
  return buttonList;
}

let pC;
// pC = 0;
let week = ['tdSeg','tdTer','tdQua','tdQui','tdSex'];
let buttonList = getNthButton();

for (let i = 0; i < buttonList.length; i++) {
  for (let j = 0; j < buttonList[i].length; j++) {
    buttonOnClick(buttonList[i][j], 35, i);
  }
}

for (let i = 3; i <= 20; i++) {
  if (i%2 == 0) {
    document.querySelector(`tr:nth-child(${i})`).style.backgroundColor = "#f1efed";
  } else {
    document.querySelector(`tr:nth-child(${i})`).style.backgroundColor = "#e9e7f1";
  }
}

// document.getElementsByTagName();
// document.addEventListener('click', );
// document.querySelectorAll();
