const btnRed = document.getElementById("btn-vermelho");
const btnYellow = document.getElementById("btn-amarelo");
const btnGreen = document.getElementById("btn-verde");
const btnAuto = document.getElementById("btn-auto");
const sinalVermelho = document.getElementById("red");
const sinalAmarelo = document.getElementById("yellow");
const sinalVerde = document.getElementById("green");

const cores = [sinalAmarelo, sinalVerde, sinalVermelho];

btnRed.addEventListener("click", function () {
  sinalVermelho.classList.toggle("red-signal"),
    sinalVermelho.classList.toggle("red-signalOn");
  sinalAmarelo.classList.add("yellow-signal");
  sinalAmarelo.classList.remove("yellow-signalOn");
  sinalVerde.classList.add("green-signal");
  sinalVerde.classList.remove("green-signalOn");
});
btnYellow.addEventListener("click", function () {
  sinalAmarelo.classList.toggle("yellow-signal"),
    sinalAmarelo.classList.toggle("yellow-signalOn");
  sinalVermelho.classList.add("red-signal");
  sinalVermelho.classList.remove("red-signalOn");
  sinalVerde.classList.add("green-signal");
  sinalVerde.classList.remove("green-signalOn");
});
btnGreen.addEventListener("click", function () {
  sinalVerde.classList.toggle("green-signal"),
    sinalVerde.classList.toggle("green-signalOn");
  sinalVermelho.classList.remove("red-signalOn");
  sinalVermelho.classList.add("red-signal");
  sinalAmarelo.classList.add("yellow-signal");
  sinalAmarelo.classList.remove("yellow-signalOn");
});

async function redOn() {
  sinalVermelho.classList.toggle("red-signal"),
    sinalVermelho.classList.toggle("red-signalOn");
  sinalAmarelo.classList.add("yellow-signal");
  sinalAmarelo.classList.remove("yellow-signalOn");
  sinalVerde.classList.add("green-signal");
  sinalVerde.classList.remove("green-signalOn");
}
async function yellowOn() {
  sinalAmarelo.classList.toggle("yellow-signal"),
    sinalAmarelo.classList.toggle("yellow-signalOn");
  sinalVermelho.classList.add("red-signal");
  sinalVermelho.classList.remove("red-signalOn");
  sinalVerde.classList.add("green-signal");
  sinalVerde.classList.remove("green-signalOn");
}
async function greenOn() {
  sinalVerde.classList.toggle("green-signal"),
    sinalVerde.classList.toggle("green-signalOn");
  sinalVermelho.classList.remove("red-signalOn");
  sinalVermelho.classList.add("red-signal");
  sinalAmarelo.classList.add("yellow-signal");
  sinalAmarelo.classList.remove("yellow-signalOn");
}
let isRunning = false;
let timeoutId;

function autoOn() {
  if (!isRunning) {
    return;
  }

  redOn();

  timeoutId = setTimeout(function () {
    if (!isRunning) {
      return;
    }

    yellowOn();

    timeoutId = setTimeout(function () {
      if (!isRunning) {
        return;
      }

      greenOn();
      timeoutId = setTimeout(autoOn, 1500); // Reinicia automaticamente após 1,5 segundos
    }, 1500); // Intervalo de 1,5 segundos entre a segunda e a terceira função
  }, 1500); // Intervalo de 1,5 segundos entre a primeira e a segunda função
}

document.getElementById("btn-auto").addEventListener("click", function () {
  if (isRunning) {
    isRunning = false;
    clearTimeout(timeoutId); // Cancela o próximo timeout
  } else {
    isRunning = true;
    autoOn(); // Inicia a função
  }
});
