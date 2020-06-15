let audioAtivo = true
audioBackground.play() // ativa o som
audioBackground.loop = true

const acaoSom = () => {
    let localIconeSom = document.querySelector("#iconeSom")
    if(audioAtivo){
        localIconeSom.setAttribute("class", "fas fa-volume-mute fa-3x")
        audioBackground.pause()
        audioAtivo = false
    }else{
        localIconeSom.setAttribute("class", "fas fa-volume-up fa-3x")
        audioBackground.play()
        audioAtivo = true
    }
}

const alterarVolume = () => {
    let volumeAtual = document.querySelector("#volumeMusica").value
    audioBackground.volume = volumeAtual
}