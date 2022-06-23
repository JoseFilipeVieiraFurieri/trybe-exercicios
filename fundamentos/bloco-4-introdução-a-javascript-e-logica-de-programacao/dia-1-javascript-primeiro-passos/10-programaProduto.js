const custoProduto = 800;

const valorDeVenda = 1300;

const impostoAplicado = custoProduto * 0.20;

const custoTotal = custoProduto + impostoAplicado;

const Lucro = valorDeVenda - custoTotal;

 if ( custoProduto > 0 && valorDeVenda > 0) {
    console.log (Lucro);
 } else {
    console.log ('Erro : numero invalido')
 }



