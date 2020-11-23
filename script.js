function perCent(value, total, dia) {
  pC = 0;
  pC += value / total * 100;
  document.getElementById(week[dia - 2]).innerHTML = `${Math.round(pC)}%`
}

let pC;
let week = ['tdSeg','tdTer','tdQua','tdQui','tdSex'];

// document.getElementsByTagName();
// document.addEventListener('click', );
// document.querySelectorAll();
