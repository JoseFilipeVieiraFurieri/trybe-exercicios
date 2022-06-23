let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = []

for (index = 0; index < numbers.length; index += 1) {
    if ( numbers[index] % 2 !== 0) {
        impares.push(numbers[index])
    } else {
        console.log('Nenhum valor impar encontrado')
    }
} 
console.log(impares);

