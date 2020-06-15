const nivel1 = () => {

    personagemPegouNave = false
    
    // posicao da porta
    porta.x = canvas.width - 120
    porta.y = 10
    
    // posicao da chave
    chave.x = 150
    chave.y = porta.height

    plataforma.push({
        x: espacamento.pp,
        y: andar.primeiro,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0,
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.segundo,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    plataforma.push({
        x: espacamento.m,
        y: andar.terceiro,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 2
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 1
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    plataforma.push({
        x: espacamento.p,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    plataforma.push({
        x: espacamento.g,
        y: andar.quarto,
        width: LARGURA_PLATAFORMA,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // plataforma da porta
    plataforma.push({
        x: canvas.width - (porta.width + LARGURA_PLATAFORMA / 2),
        y: porta.height + 16,
        width: porta.width + LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // plataforma da chave
    plataforma.push({
        x: LARGURA_PLATAFORMA / 1.4,
        y: porta.height + 50,
        width: LARGURA_PLATAFORMA / 2,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    })

    // chao 1
    plataforma.push({
        x: 0,
        y: canvas.height - 20,
        width: LARGURA_PLATAFORMA * 1.5,
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