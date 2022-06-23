let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = 5;

for( index = 0; index < numbers.length; index += 1) {
    if (menorValor > numbers[index] ) {
        menorValor = numbers[index]
    }
} 
console.log(menorValor);