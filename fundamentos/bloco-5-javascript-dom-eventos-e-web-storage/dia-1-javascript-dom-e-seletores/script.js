let corTitulo = document.getElementById('header-container');
corTitulo.style.backgroundColor = '#00B069';
let urgente = document.getElementsByClassName('emergency-tasks')[0];
urgente.style.backgroundColor = '#FF9F84';
let naoUrgente = document.getElementsByClassName('no-emergency-tasks') [0];
naoUrgente.style.backgroundColor = '#F9DB5E';
let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533'
let h3 = document.getElementsByTagName('h3');
  for (let index = 0;index < h3.length;index += 1 ) {
     if ( index <= 1) {
        h3[index].style.backgroundColor = '#A500F3'
     } else {
        h3[index].style.backgroundColor = '#232525'
     }
  }



