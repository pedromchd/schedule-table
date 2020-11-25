function innerHTML(button) {
  switch (button) {
    case 'Estudar':
      return value = 30;
    case 'Academia':
    case 'Natação':
      return value = 20;
    case 'Acordar':
    case 'Tomar Café':
    case 'Meditar':
    case 'Dormir':
      return value = 10;
    case 'Almoçar':
    case 'Jantar':
      return value = 5;
  }
}
function buttonOnClick(button, dia) {
  button.onclick = function perCent() {
    innerHTML(button.innerHTML);
    if (week[dia] !== weekLog) {
      pC = document.getElementById(week[dia]).innerHTML.split('');
      pC.pop();
      pC = parseInt(pC.join(''));
      weekLog = week[dia];
    }
    pC += value;
    document.getElementById(week[dia]).innerHTML = `${pC}%`;
    button.style.filter = 'contrast(60%) brightness(120%)';
    button.disabled = true;
  };
}
function getNthButton () {
  let buttonList = [];
  for (let i = 2; i <= 6; i++) {
    buttonList.push(document.querySelectorAll(`td:nth-child(${i}) button`));
  }
  return buttonList;
}

let pC = 0;
let value = 0;
let weekLog = '';
let week = ['tdSeg','tdTer','tdQua','tdQui','tdSex'];
let buttonList = getNthButton();

for (let i = 0; i < buttonList.length; i++) {
  for (let j = 0; j < buttonList[i].length; j++) {
    buttonOnClick(buttonList[i][j], i);
  }
}
for (let i = 3; i <= 20; i++) {
  if (i%2 == 0) {
    document.querySelector(`tr:nth-child(${i})`).style.backgroundColor = "#f1efed";
  } else {
    let verticalButton = document.querySelectorAll(`td:nth-child(${i}) button`);
    for (let j = 0; j < verticalButton.length; j++) {
      verticalButton[j].style.backgroundColor = '#87549C';
    }
    document.querySelector(`tr:nth-child(${i})`).style.backgroundColor = "#e9e7f1";
  }
}
