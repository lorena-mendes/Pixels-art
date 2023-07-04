const paletaDeCores = ['color-black', 'color-blue', 'color-green', 'color-pink'];
const colorPalette = document.getElementById('color-palette');

const PIXEL_BOARD = 'pixel-board';

for (let i = 0; i < paletaDeCores.length; i += 1) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const div = document.createElement('div');
  if (i === 0) {
    div.style.backgroundColor = 'black';
  } else {
    div.style.backgroundColor = `#${randomColor}`;
  }
  div.classList.add('color');
  // eslint-disable-next-line no-use-before-define
  div.addEventListener('click', addSelected);
  colorPalette.appendChild(div);
}

const selected = document.querySelector('.color');
selected.classList.add('selected');

const todasDivsColor = document.querySelectorAll('.color');
let corSelecionada = 'black';

function addSelected(event) {
  for (let i = 0; i < todasDivsColor.length; i += 1) {
    todasDivsColor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
  corSelecionada = event.target.style.backgroundColor;
}

function addCorSelecionada(event) {
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = corSelecionada;
  // event.target.classList.add(corSelecionada);
}

function addQuadro(quantidadeDeQuadros = 25) {
  for (let index = 0; index < quantidadeDeQuadros; index += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.style.backgroundColor = 'white';
    const pixel = document.getElementById(PIXEL_BOARD);
    div.addEventListener('click', addCorSelecionada);
    pixel.appendChild(div);
    pixel.style
      .setProperty('grid-template-columns', `repeat(${Math.sqrt(quantidadeDeQuadros)}, 40px)`);
  }
}
addQuadro();

// BOTÃO LIMPAR
const botao = document.getElementById('clear-board');
let todoPixel = document.querySelectorAll('.pixel');
const body = document.querySelector('body');
body.appendChild(botao);

function retornaCorBranca() {
  todoPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < todoPixel.length; i += 1) {
    todoPixel[i].removeAttribute('style');
    todoPixel[i].classList.add('pixel');
  }
}
botao.addEventListener('click', retornaCorBranca);

let pixel = document.getElementById(PIXEL_BOARD);
body.insertBefore(botao, pixel);

// INPUT QUE MUDA O TAMANHO DOS QUADRADOS
const input = document.getElementById('board-size');

// BOTÃO VAMO QUE VAMO
const botaoPixel = document.getElementById('generate-board');
body.insertBefore(input, pixel);
body.insertBefore(botaoPixel, pixel);

function maoirQueZero() {
  pixel = document.getElementById(PIXEL_BOARD);
  if (!input.value) {
    alert('Board inválido!');
  }
  if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  while (pixel.firstChild) {
    pixel.removeChild(pixel.lastChild);
  }
  // eslint-disable-next-line no-restricted-properties
  const pixelAoQuadrado = Math.pow(input.value, 2);
  addQuadro(pixelAoQuadrado);
}

botaoPixel.addEventListener('click', maoirQueZero);

// Selecionar os elementos existentes
const clearButton = document.getElementById('clear-board');
const inputContainer = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');

// Mover os elementos para dentro da div "controls"
const controlsDiv = document.getElementById('controls');
controlsDiv.appendChild(clearButton);
controlsDiv.appendChild(inputContainer);
controlsDiv.appendChild(generateButton);

// Mover a div "controls" para antes da div "pixel-board"
body.insertBefore(controlsDiv, generateButton);
