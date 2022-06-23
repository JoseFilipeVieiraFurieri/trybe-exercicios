let numbers = [5,9,3,19,70,8,100,2,35,27];
let soma= 0;

for (index = 0; index < numbers.length; index += 1) {
   soma= soma + numbers[index];
   console.log(soma);
}

let mediaNumbers = soma / 10;

console.log('A média dos elementos é : ' + mediaNumbers);

if (mediaNumbers > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}