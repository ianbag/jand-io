const nivel2 = () => {

    personagemPegouNave = false
    
    // posicao da porta
    porta.x = canvas.width - 120
    porta.y = andar.segundo - porta.height - 7
    
    // posicao da chave
    chave.x = 150
    chave.y = porta.height

    personagem.y = andar.primeiro - (andar.primeiro / 10)
    
       plataforma.push({
        x: espacamento.pp,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.m,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 2
    })

    plataforma.push({
        x: espacamento.g,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })
/*
    plataforma.push({
        x: espacamento.m,
        y: andar.terceiro,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })
*/
    plataforma.push({
        x: espacamento.m,
        y: andar.terceiro,
        width: LARGURA_PLATAFORMA ,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 1
    })


    // porta baixo
    plataforma.push({
        x: canvas.width - LARGURA_PLATAFORMA / 0.6,
        y: andar.segundo,
        width: 500,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // porta cima
    plataforma.push({
        x: canvas.width - LARGURA_PLATAFORMA / 1.2,
        y: andar.segundo - porta.height - 10,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // chao 1
    plataforma.push({
        x: 0,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA/1.2,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })


    // teto
    plataforma.push({
        x: 0,
        y: -20,
        width: canvas.width,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // parede esquerda
    plataforma.push({
        x: -10,
        y: 0,
        width: 10,
        height: canvas.height,
        tipo: 0
    })

    // parede esquerda
    plataforma.push({
        x: canvas.width,
        y: 0,
        width: 10,
        height: canvas.height,
        tipo: 0
    })


}