let data = document.getElementById('data-value');
let botaoContar = document.querySelector('#botao1');
const botaoVoltar = document.querySelector('#botao2');
const contadorPrincipal = document.querySelector('.contador-principal');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const footer = document.getElementById('footer');

const d = document.getElementById('diasTexto');
const h = document.getElementById('horasTexto');
const m = document.getElementById('minutosTexto');
const s = document.getElementById('segundosTexto');
const d1 = document.getElementById('dias');
const h1 = document.getElementById('horas');
const m1 = document.getElementById('minutos');
const s1 = document.getElementById('segundos');

function contar() {
  let futureData = new Date(data.value);
  let actualData = new Date();
  let countdowntime = futureData.getTime() - actualData.getTime();
  let dias = Math.floor(countdowntime / (24 * 60 * 60 * 1000));
  let hours = Math.floor(countdowntime / (60 * 60 * 1000));
  let minutes = Math.floor(countdowntime / (60 * 1000));
  let seconds = Math.floor(countdowntime / 1000);

  let horas = hours % 24;
  let minutos = minutes % 60;
  let segundos = seconds % 60;

  d.innerText = dias;
  h.innerText = horas;
  m.innerText = minutos;
  s.innerText = segundos;
  d1.innerText = 'dias';
  h1.innerText = 'horas';
  m1.innerText = 'minutos';
  s1.innerText = 'segundos';
  contadorPrincipal.classList.add('ativo');
  container2.classList.add('ativo');
  container.classList.add('ativo');
  footer.classList.add('ativo');
}

function ativar() {
  timer = setInterval(() => {
    contar();
  }, 1000);
}

function parar() {
  clearInterval(timer);
  d.innerText = '';
  h.innerText = '';
  m.innerText = '';
  s.innerText = '';
  contadorPrincipal.classList.remove('ativo');
  container2.classList.remove('ativo');
  container.classList.remove('ativo');
  footer.classList.remove('ativo');
  data.value = '';
}
function pausar() {
  clearInterval(timer);
}
function valida() {
  if (data.value == '') {
    alert('Por favor insira uma data.');
  } else {
    ativar();
  }
}

botaoContar.addEventListener('click', valida);
