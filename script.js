function weekID() {
  let dayID = [];
  let temp = document.querySelector('tfoot tr').children;
  for (let i = 0; i < temp.length; i++) {
    dayID.push(temp[i].id);
  }
  day = dayID[day];
  if (day !== weekLog) {
    pC = document.getElementById(day).innerHTML.split('');
    pC.pop();
    pC = parseInt(pC.join(''));
  }
  return day;
}
function innerHTML(tbutton) {
  switch (tbutton.innerHTML) {
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

let tbutton = document.querySelectorAll('tbody td:not(:first-child):not(:empty)');
for (let i = 0; i < tbutton.length; i++) {
  tbutton[i].classList.add('tbutton');
  if (tbutton[i].cellIndex % 2 === 0) {
    tbutton[i].classList.add('color');
  }
}

let pC = 0;
let value = 0;
let weekLog = '';
let table = document.querySelector('table');
table.addEventListener('click', function(e) {
  let eTarget = e.target;
  if (eTarget.nodeName === 'TD' && eTarget.classList.contains('tbutton') && !eTarget.classList.contains('bactive')) {
    eTarget.classList.toggle('bactive');
    day = eTarget.cellIndex;
    weekID();
    innerHTML(eTarget);
    pC += value;
    document.getElementById(`${day}`).innerHTML = `${pC}%`;
  }
});
