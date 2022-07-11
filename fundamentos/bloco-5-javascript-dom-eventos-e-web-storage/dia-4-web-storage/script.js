let pai = document.getElementsByTagName('body');
let pai2 = document.getElementsByTagName('p');
let inputCorFundo = document.querySelector('.escolhaCorFundo');
let inputCorFonte = document.querySelector('.escolhaCorFonte');
let inputTamanhoFonte = document.querySelector('.escolherTamanhoFonte');
let inputLineHeight = document.querySelector('.escolherLineheight');
let inputFontStyle = document.querySelector('.escolherEstiloFonte');


inputCorFundo.addEventListener('change', changeBackgroundColor);
inputCorFonte.addEventListener('change', changeFontColor);
inputTamanhoFonte.addEventListener('change', changeFontSize);
inputLineHeight.addEventListener('change', chanceLineHeight);
inputFontStyle.addEventListener('change', changeFontFamily)



function changeBackgroundColor() {
    pai[0].style.backgroundColor = inputCorFundo.value;
}

function  changeFontColor() {
    pai2[0].style.color = inputCorFonte.value;
    
}

function changeFontSize() {
    pai2[0].style.fontSize = inputTamanhoFonte.value;
}

function chanceLineHeight () {
    pai2[0].style.lineHeight = inputLineHeight.value;
    
}

function changeFontFamily(event) {
    console.log(event.target);
    pai2[0].style.fontFamily = inputFontStyle.value;
}

