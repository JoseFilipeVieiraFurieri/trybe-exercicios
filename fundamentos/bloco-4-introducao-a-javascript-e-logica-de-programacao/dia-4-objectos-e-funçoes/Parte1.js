// Exercicio 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem-vinda, ' + info.personagem)

// exercicio 2

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['Recorrente'] = 'Sim';

//   console.log(info);

// Exercicio 3

// let info = {
//         personagem: 'Margarida',
//         origem: 'Pato Donald',
//         nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//       };
    
//       info['Recorrente'] = 'Sim';


//       for (let chave in info) {
//         console.log(chave);
//       }

// Exercicio 4

// let info = {
//         personagem: 'Margarida',
//         origem: 'Pato Donald',
//         nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//       };
    
//       info['Recorrente'] = 'Sim';


//       for (let chave in info) {
//         console.log(info[chave]);
//       }

// Exercicio 5

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim'
//   };

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O ultimo MacPatinhas',
//     recorrente: 'sim'
//   }
// console.log(info.personagem + ' ' + 'e' + ' ' + info2.personagem);
// console.log(info.origem + ' ' + 'e' + ' ' + info2.origem);
// console.log(info.nota + ' ' + 'e' + ' ' + info2.nota)
// console.log('Ambos Recorrentes');

// Exercicio 6

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
  
//   let tituloLeitor = leitor.livrosFavoritos[0];
//   console.log(leitor.nome);
//   console.log(leitor.sobrenome);
//   console.log(tituloLeitor['titulo']);
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama ' + tituloLeitor['titulo']);

// Exercicio 7 e 8


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
 leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'})

 console.log(leitor);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');















  

 

