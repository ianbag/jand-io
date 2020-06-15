function verificarColisao(personagem, plataformaColisao) {

	// plataformaColisao.x -= 1;
	// personagem.x -= 0.1
	
	let vectorX = (personagem.x + (personagem.width / 2)) - (plataformaColisao.x + (plataformaColisao.width / 2))
	let vectorY = (personagem.y + (personagem.height / 2)) - (plataformaColisao.y + (plataformaColisao.height / 2))

	const LARGURA_METADE = (personagem.width / 2) + (plataformaColisao.width / 2)
	const ALTURA_METADE = (personagem.height / 2) + (plataformaColisao.height / 2)

	let direcaoDaColisao = null;

	if (Math.abs(vectorX) < LARGURA_METADE && Math.abs(vectorY) < ALTURA_METADE) {

		let compensadorX = LARGURA_METADE - Math.abs(vectorX)
		let compensadorY = ALTURA_METADE - Math.abs(vectorY)

		if (compensadorX < compensadorY) {
			if (vectorX > 0) {
				direcaoDaColisao = "esq";
				personagem.x += compensadorX;
			} else {
				direcaoDaColisao = "dir";
				personagem.x -= compensadorX;
			}
		} else {
			if (vectorY > 0) {
				direcaoDaColisao = "cima";
				personagem.y += compensadorY;
			} else {
				direcaoDaColisao = "baixo";
				personagem.y -= compensadorY;
			}
		}
	}

	return direcaoDaColisao;
}