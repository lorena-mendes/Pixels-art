let paletaDeCores = ['color-black', 'color-blue', 'color-green', 'color-pink'];
let colorPalette = document.getElementById('color-palette');

for (let i = 0; i < paletaDeCores.length; i += 1) {
  let div = document.createElement('div');
  div.classList.add('color');
  div.classList.add(paletaDeCores[i])
  div.addEventListener('click', addSelected)
  colorPalette.appendChild(div);
}

function addQuadro () {
  for (let index = 0; index < 25; index +=1) {
    let div = document.createElement("div")
    div.classList.add("pixel")
    div.style.backgroundColor = 'white'
    let pixel = document.getElementById("pixel-board")
    div.addEventListener('click', addCorSelecionada)
    pixel.appendChild(div);        
  }
}
addQuadro ();

let selected = document.querySelector('.color');
selected.classList.add('selected');

let todasDivsColor = document.querySelectorAll('.color');
let corSelecionada = paletaDeCores[0]

function addSelected (event) {
  for (let i = 0; i < todasDivsColor.length; i += 1) {
    todasDivsColor[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
  corSelecionada = event.target.className.replace('color', '').replace('selected', '').trim('')
  
};

function addCorSelecionada (event) {
  event.target.classList.add(corSelecionada);
}

let botao = document.createElement('button');
botao.id = 'clear-board';
let primeiraSection = document.querySelector('section');
botao.innerHTML = 'Limpar'
let todoPixel = document.querySelectorAll('.pixel')
let body = document.querySelector("body")
body.appendChild(botao);


function retornaCorBranca () {
  for (let i = 0; i < todoPixel.length; i += 1) {
    todoPixel[i].removeAttribute('class')
    todoPixel[i].classList.add('pixel')
  }
}
botao.addEventListener('click', retornaCorBranca);
