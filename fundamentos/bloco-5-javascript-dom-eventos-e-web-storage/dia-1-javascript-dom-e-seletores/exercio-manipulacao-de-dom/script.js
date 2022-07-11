let textoCentro = document.getElementsByTagName('p');
textoCentro[1].innerText = 'Com os olhos';
let conteudoPrincipal = document.getElementsByClassName('main-content') [0];
conteudoPrincipal.style.backgroundColor = 'rgb(76,164,109)'
 let conteudoCentro = document.getElementsByClassName('center-content') [0];
 conteudoCentro.style.backgroundColor = 'white';
 let cabecalho = document.getElementsByTagName('h1');
 cabecalho[0].innerText = 'Exercicício 5.1 - JavaScript';
for (let index = 0;index < textoCentro.length;index += 1) {
    console.log(textoCentro[index]);
}

 