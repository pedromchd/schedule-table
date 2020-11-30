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
function resetTotal() {
  let bactive = document.querySelectorAll('table .bactive');
  for (let i = 0; i < bactive.length; i++) {
    bactive[i].classList.remove('bactive');
  }
  for (let j = 1; j < total.length; j++) {
    total[j].innerHTML = '0%';
  }
}

let tbutton = document.querySelectorAll('tbody td:not(:first-of-type):not(:empty)');
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

if (localStorage['history'] === undefined) {
  localStorage['history'] = '<i>Nada por enquanto...</i>';
}
document.querySelector('p#log').innerHTML = localStorage['history'].replaceAll('*', '<br>');
let history = document.querySelector('div#history');
history.addEventListener('click', function(e) {
  let log = '<i>Nada por enquanto...</i>';
  if (e.target.nodeName === 'BUTTON') {
    if (e.target.classList.contains('save')) {
      let printText = '';
      for (let i = 1; i < total.length; i++) {
        printText += `${total[i].id}: ${total[i].innerHTML} / `;
      }
      let date = new Date().toJSON().slice(0, 10).replace(/-/g, '.');
      localStorage['history'] = localStorage['history'].replace(log, '');
      log = `${date} - ${printText}` + '*';
      localStorage['history'] += log;
      resetTotal();
    } else if (e.target.classList.contains('clear') && confirm('Deseja deletar o histórico?') === true) {
      localStorage.clear();
      localStorage['history'] = log;
    }
    document.querySelector('p#log').innerHTML = localStorage['history'].replaceAll('*', '<br>');
  }
});
