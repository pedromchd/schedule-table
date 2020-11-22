function perCent(value, total) {
  pC += value / total * 100;
  tdTer.innerHTML = `${pC}%`
  // console.log(pC);
}

let pC = 0;

// let input = document.getElementById('terca');
// input.value = 3;

// let b = parseInt(prompt('Informe o valor da sua atividade:'));
// let v = parseInt(prompt('Informe o somatorio de todas as aitivades:'));
// console.log(b, v);

// console.log(`${perCent(b, v)}%`);
