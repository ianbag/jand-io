document.addEventListener("keydown", (evento) => {
	if (!iniciarJogo && evento.keyCode == 13){
		comecarJogo()
		atualizarMapa()
	}
	if (acabouJogo && evento.keyCode == 13){
		if (proximaFase == true){
			mapa++
			proximaFase = false
		}
		reniciar()
		atualizarMapa()
	}

	if(evento.keyCode == 45){
		$('#cheats').modal('show')
	}

	teclas[evento.keyCode] = true
})

document.addEventListener("keyup", (evento) => {
	teclas[evento.keyCode] = false
})