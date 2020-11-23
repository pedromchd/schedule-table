function perCent(value, total, dia) {
  pC = 0;
  pC += value / total * 100;
  document.getElementById(week[dia - 2]).innerHTML = `${Math.round(pC)}%`
}
function buttonOnClick(button) {
  button.onclick = function aaa() {
    document.querySelector('td:nth-child(3) button').innerHTML = 'Hello!';
    perCent(1,5,4);
  };
}

let pC;
let week = ['tdSeg','tdTer','tdQua','tdQui','tdSex'];
let buttonList = document.querySelectorAll('button');

for (let i = 0; i < buttonList.length; i++) {
  buttonOnClick(buttonList[i]);
}

// document.getElementsByTagName();
// document.addEventListener('click', );
// document.querySelectorAll();
