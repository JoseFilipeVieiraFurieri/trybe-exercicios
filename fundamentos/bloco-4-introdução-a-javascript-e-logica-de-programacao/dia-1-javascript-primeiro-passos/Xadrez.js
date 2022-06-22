const pecaDeXadrez="rei";

switch (pecaDeXadrez) {
    
    case "peão":
    console.log("Move-se verticalmente a coluna que se encontra");
    break;
    
    case "tower":
    console.log("Move-se em linhas retas nas calunas e fileiras");
    break;

    case "cavalo":
        console.log("Move-se em L no tabuleiro");
    break;

    case "bispo":
        console.log("Movimenta-se na diagonal")
    break;

    case "rainha":
        console.log("Movimenta-se em linhas retas nas fileiras, colunas e diagonais");
    break;

    case "rei":
        console.log("Move-se uma casa na diagonal, vertical ou horizontal");
        break;


        
        

    default:
        console.log("Peça invalida");
        break;
}