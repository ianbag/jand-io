const movimentacaoPersonagem = () => {
	const ATRITO = 0.8
	const GRAVIDADE = 0.9

	personagem.andarPosicao = "none"

	if (teclas[38] || teclas[32] && personagem.chegouNoChao)
		if (!personagem.pulando) {
			personagem.pulando = true
			personagem.velY = -personagem.forcaPulo
		}

	if (teclas[39]) {
		personagem.andarPosicao = "dir"
		if (personagem.velX < personagem.velocidade) 
			personagem.velX += personagem.velocidade / 1.5
	}

	if (teclas[37]) {
		personagem.andarPosicao = "esq"
		if (personagem.velX > -personagem.velocidade) 
			personagem.velX -= personagem.velocidade / 1.5
	}

	personagem.x += personagem.velX
	personagem.y += personagem.velY

	personagem.velX *= ATRITO
	personagem.velY += GRAVIDADE

	personagem.chegouNoChao = false

	for (let i = 0; i < plataforma.length; i++) {
		let direcao = verificarColisao(personagem, plataforma[i])

		// se o tipo da plataforma for 2
		if (plataforma[i].tipo == 2) {
			if (movimentoPlataformaTipo2 == 0) {
				plataforma[i].width -= personagem.velocidade / 1.5
				if (plataforma[i].width < 0)
					movimentoPlataformaTipo2 = 1
			} else {
				plataforma[i].width += personagem.velocidade / 1.5
				if (plataforma[i].width > LARGURA_PLATAFORMA)
					movimentoPlataformaTipo2 = 0
			}
		}

		if (direcao == "esq" || direcao == "dir"){
			personagem.velX = 0
		}
		else if (direcao == "baixo") {
			// se o tipo da plataforma for 1
			if(plataforma[i].tipo == 1){
				plataforma[i].x -= personagem.velocidade / 2
				personagem.velX -= personagem.velocidade / 10
			}
			// se tipo plataforma for 3
			else if(plataforma[i].tipo == 3){
				plataforma[i].y += personagem.velocidade
				personagem.velY += personagem.velocidade / 3
			}
			// se tipo plafaorma for 4
			else if(plataforma[i].tipo == 4 &&  plataforma[i].y >= personagem.width){
				plataforma[i].y -= personagem.velocidade
				personagem.velY -= personagem.velocidade / 3
			}

			personagem.pulando = false
			personagem.chegouNoChao = true
		} else if (direcao == "cima")
			personagem.velY *= - personagem.velocidade / 12
	}

	if (personagem.chegouNoChao)
		personagem.velY = 0
}