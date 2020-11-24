function buttonOnClick(button, value, dia) {
  button.onclick = function perCent() {
    if (week[dia] !== weekLog) {
      pC = 0;
      weekLog = week[dia];
    }
    pC += value;
    document.getElementById(week[dia]).innerHTML = `${pC}%`;
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
let weekLog;
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
