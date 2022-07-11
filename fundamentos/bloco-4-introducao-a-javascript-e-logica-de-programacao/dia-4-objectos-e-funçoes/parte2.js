// Exercicio 1 -  PALINDROMO- IMPORTANTE AQUI HA USO DE SPLIT,REVERSE E JOIN. SEMPRE DAR UMA OLHADA!!!!


// let confirmacao = '';

// function palindromo(nome) {
//    let texto = nome.split('').reverse().join('');
//    if (nome === texto) {
//        confirmacao = true;
//    } else {
//       confirmacao = false;
//    }

//    return confirmacao;

// }

// console.log(palindromo('arara'))

// Exercicio 2 - Maior Valor

// let indice = '';
// function retornaMaiorValor(array) {
//    for (let index = 0; index < array.length;index += 1) {
//       if ( array[index] > indice) {
//          indice = index;
//       }
//    }
   
//    return indice;

// }

// console.log(retornaMaiorValor([2, 3, 6, 7, 10, 1]));

// exercicio 3 - Menor Valor;


// let indice = ' ';
// function retornaMenorValor(array) {
//    for (let index = 0; index < array.length;index += 1) {
//       if ( array[index] < indice) {
//          indice = index;
//       }
//    }
   
//    return indice;
// }

// console.log(retornaMenorValor([2, 4, 6, 7, 10, 0, -3]))

// Exercicio 4 - Maior quantidade de caracteres
 let caracteres = ' ';   
function maiorNumeroCaracteres(array) {
   for (let index = 0; index < array.length; index += 1) {
      if (array[index].length > caracteres.length) {
         caracteres = array[index];
      }
   }
   return caracteres;
}

console.log(maiorNumeroCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


