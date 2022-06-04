let paletaDeCores = ['color-black', 'color-blue', 'color-green', 'color-pink'];
let colorPalette = document.getElementById('color-palette');

for (let i = 0; i < paletaDeCores.length; i += 1) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);  
  let div = document.createElement('div');
  div.style.backgroundColor = "#" + randomColor;
  if (i === 0) {
    div.style.backgroundColor = 'black'
  }
  div.classList.add('color');
  // div.classList.add(paletaDeCores[i])
  div.addEventListener('click', addSelected)
  colorPalette.appendChild(div);
}

function addQuadro (quantidadeDeQuadros = 25) {
  for (let index = 0; index < quantidadeDeQuadros; index +=1) {
    let div = document.createElement("div")
    div.classList.add("pixel")
    div.style.backgroundColor = 'white'
    let pixel = document.getElementById("pixel-board")
    div.addEventListener('click', addCorSelecionada)
    pixel.appendChild(div); 
    pixel.style.setProperty('grid-template-columns', 'repeat(' + Math.sqrt(quantidadeDeQuadros) + ', 40px)');

  }
}
addQuadro ();

let selected = document.querySelector('.color');
selected.classList.add('selected');

let todasDivsColor = document.querySelectorAll('.color');
let corSelecionada = 'black'

function addSelected (event) {
  for (let i = 0; i < todasDivsColor.length; i += 1) {
    todasDivsColor[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
  corSelecionada = event.target.style.backgroundColor
  
};

function addCorSelecionada (event) {
  event.target.style.backgroundColor = corSelecionada
  // event.target.classList.add(corSelecionada);
}

let botao = document.createElement('button');
botao.id = 'clear-board';
let primeiraSection = document.querySelector('section');
botao.innerHTML = 'Limpar'
let todoPixel = document.querySelectorAll('.pixel')
let body = document.querySelector("body")
body.appendChild(botao);


function retornaCorBranca () {
  todoPixel = document.querySelectorAll('.pixel')
  for (let i = 0; i < todoPixel.length; i += 1) {
    todoPixel[i].removeAttribute('style')
    todoPixel[i].classList.add('pixel')
  }
}
botao.addEventListener('click', retornaCorBranca);

let pixel = document.getElementById("pixel-board")
body.insertBefore(botao,pixel)

let input = document.createElement('input');
input.id = 'board-size';
input.setAttribute('type', 'number')
input.setAttribute('min', '1')
let botaoPixel = document.createElement('button');
botaoPixel.id = 'generate-board';
botaoPixel.innerHTML = 'VQV'
body.insertBefore(input,pixel)
body.insertBefore(botaoPixel,pixel)

botaoPixel.addEventListener ('click', maoirQueZero)

function maoirQueZero () {
  let pixel = document.getElementById("pixel-board")
  if (!input.value) {
    alert('Board inválido!')  
  }
  if (input.value < 5) {
    input.value = 5
  } else if (input.value > 50) {
    input.value = 50
  }
  while (pixel.firstChild) {
    pixel.removeChild(pixel.lastChild);
  }
  let pixelAoQuadrado = Math.pow(input.value, 2);
  addQuadro (pixelAoQuadrado);
}
