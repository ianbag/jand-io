const nivel4 = () => {


    personagem.velocidade = canvas.width / 300


    // posicao da porta
    porta.x = -porta.width
    porta.y = -porta.height

    // posicao da chave
    chave.x = -chave.width
    chave.y = -chave.height

    // chao 1
    plataforma.push({
        x: 0,
        y: canvas.height - 20,
        width: canvas.width / 1.5,
        height: ALTURA_PLATAFORMA,
        tipo: 0
    });

    // teto
    plataforma.push({
        x: 0,
        y: -20,
        width: canvas.width,
        height: ALTURA_PLATAFORMA,
        tipo: 1
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