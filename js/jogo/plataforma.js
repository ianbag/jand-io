let plataforma = [];
let LARGURA_PLATAFORMA = canvas.width / 10;
let ALTURA_PLATAFORMA = 20;

const VH = (canvas.height / 100)
const VW = (canvas.width / 100)

const andar = {
    primeiro: canvas.height - (VH * 15),
    segundo: canvas.height - (VH * 30),
    terceiro: canvas.height - (VH * 45),
    quarto: canvas.height - (VH * 60),
    quinto: canvas.height - (VH * 75),
}

const espacamento = {
    pp: VW * 20,
    p: VW * 40,
    m: VW * 60,
    g: VW * 80
}

// tipos da plataforma e seus efeitos
// tipo 0 = plataforma parada
// tipo 1 = plataforma que anda quando está em cima
// tipo 2 = plataforma que aumenta e diminui
// tipo 3 = plataforma que cai sozinho
// tipo 4 = plataforma elevador

const atualizarMapa = () => {
    plataforma = []
    // limparTela()
    switch (mapa){
    case 1:
        nivel1()
        break
    case 2: 
        nivel2()
        break
    case 3:
        nivel3()
        break
    case 4:
        nivel4()
        break
    default:
        console.log("opcao invalida")
    }
}