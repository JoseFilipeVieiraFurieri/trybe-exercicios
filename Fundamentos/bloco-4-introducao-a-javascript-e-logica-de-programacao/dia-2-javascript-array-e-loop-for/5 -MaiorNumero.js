let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = 0;

for( index = 0; index < numbers.length; index += 1) {
    if (maiorValor < numbers[index] ) {
        maiorValor = numbers[index]
    }
} 
console.log(maiorValor);