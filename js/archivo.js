let timerInterval;
let milisegundos = 0;
let corriendo = false;

function iniciarCronometro() {
  if (!corriendo) {
    corriendo = true;
    timerInterval = setInterval(actualizarCronometro, 10);
  }
}

function pausarCronometro() {
  corriendo = false;
  clearInterval(timerInterval);
}

function reiniciarCronometro() {
  corriendo = false;
  clearInterval(timerInterval);
  milisegundos = 0;
  actualizarCronometro();
}

function actualizarCronometro() {
  milisegundos += 10;
  let tiempo = new Date(milisegundos);
  document.getElementById('timer').innerHTML = tiempo.toISOString().substr(11, 8);
}

document.getElementById('botonComenzar').addEventListener('click', iniciarCronometro);
document.getElementById('botonPausa').addEventListener('click', pausarCronometro);
document.getElementById('botonReset').addEventListener('click', reiniciarCronometro);
