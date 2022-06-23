 const salarioBruto = 4000;
 let inss= 0;
 


if ( salarioBruto < 1556.93) {
    inss= salarioBruto * 0.08
} else if ( salarioBruto > 1556.94 && salarioBruto < 2594.93) {
    inss= salarioBruto * 0.09
} else if ( salarioBruto >= 2594.93 && salarioBruto < 5189.82) {
    inss= salarioBruto * 0.11
} else {
    inss = salarioBruto + 570.88
}
console.log('Seu INSS é: '+ inss);

const salarioBase = salarioBruto - inss;

console.log('Seu salario base é: ' + salarioBase);

const IR = (3560 * 0.15) - 354.80

console.log('Sua aliquota de IR é: ' + IR);

const salarioLiquido = salarioBase - IR;

console.log('Seu salario liquido é : '+ salarioLiquido);






 


