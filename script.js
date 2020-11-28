function innerHTML(tbutton) {
  switch (tbutton.innerHTML) {
    case 'Estudar':
      return value = 30;
    case 'Academia':
    case 'Natação':
      return value = 20;
    case 'Arrumar a Casa': case 'Arrumar<br>a Casa':
    case 'Tomar Café': case 'Tomar<br>Café':
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
let weekLog = 0;
let table = document.querySelector('table');
let total = document.querySelectorAll('tfoot td');
table.addEventListener('click', function(e) {
  if (e.target.nodeName === 'TD' && e.target.classList.contains('tbutton') && !e.target.classList.contains('bactive')) {
    e.target.classList.toggle('bactive');
    let day = e.target.cellIndex;
    let dayWeek = total[day];
    if (day !== weekLog) {
      weekLog = day;
      pC = parseFloat(dayWeek.innerHTML);
    }
    innerHTML(e.target);
    pC += value;
    dayWeek.innerHTML = `${pC}%`;
  }
});

let button = document.querySelector('button');
button.addEventListener('click', function() {
  let printText = '';
  let date = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
  for (let i = 1; i < total.length; i++) {
    printText += `(${total[i].id}: ${total[i].innerHTML}) `;
  }
  let newP = document.createElement('p');
  newP.classList.add('log');
  newP.innerHTML = `<i>${date}</i> - ${printText}`;
  let history = document.querySelector('div#history');
  history.appendChild(newP);
  // localStorage['history'] += newP.innerHTML;
});
