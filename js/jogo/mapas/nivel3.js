const nivel3 = () => {

    personagemPegouNave = false
    
    // posicao da porta
    porta.x = canvas.width - 120
    porta.y = 0

    // posicao da chave
    chave.x = (canvas.width / 10) - (chave.width / 10)
    chave.y = 10

    personagem.y = andar.primeiro - (andar.primeiro / 10)


    plataforma.push({
        x: espacamento.pp,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: 120,
        y: andar.segundo,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.pp,
        y: andar.terceiro,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.terceiro,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 2
    })

    plataforma.push({
        x: espacamento.pp,
        y: andar.quinto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 1
    })

    plataforma.push({
        x: espacamento.m,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 1
    })

    plataforma.push({
        x: espacamento.g,
        y: andar.segundo,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: canvas.width - LARGURA_PLATAFORMA,
        y: andar.terceiro,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    plataforma.push({
        x: espacamento.g,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.m,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 3
    })

    plataforma.push({
        x: espacamento.m - (espacamento.pp / 2.2),
        y: andar.quarto,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 4
    })

    // barreira baixo
    plataforma.push({
        x: canvas.width/2,
        y: -20,
        width: 20,
        height: canvas.height/1.8,
        tipo: 1
    })

    // plataforma da porta
    plataforma.push({
        x: canvas.width - LARGURA_PLATAFORMA * 4,
        y: porta.height + 7,
        width: LARGURA_PLATAFORMA * 4,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // chao 1
    plataforma.push({
        x: 0,
        y: canvas.height - 20,
        width: LARGURA_PLATAFORMA * 0.8,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    });

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