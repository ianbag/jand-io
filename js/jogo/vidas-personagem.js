const verificarVidasPersonagem = () => {
    // verifica queda abaixo do chao do jogo
    if(personagem.y > canvas.height)
        setTimeout(personagemMorreu, 100)
}