const telaInicialJogo = () => {
	resolucao()

	context.fillStyle = "#fff"
	context.textAlign = "center"

	context.font = "80px PixelarRegularW01-Regular"
	context.fillText("JAND ADVENTURE", canvas.width / 2, canvas.height / 2)

	context.font = "40px PixelarRegularW01-Regular"
	context.fillText("Pressione enter para jogar", canvas.width / 2, canvas.height / 2 + 40)
}


const jogoCompleto = () => {
	acabouJogo = true;

	// limparTela()

	context.fillStyle = "#fff"
	context.textAlign = "center"

	context.font = "80px PixelarRegularW01-Regular"
	context.fillText(`Você passou da ${mapa}º fase!`, canvas.width / 2, canvas.height / 2)

	context.font = "40px PixelarRegularW01-Regular"
	context.fillText("Pressione Enter para ir para a próxima", canvas.width / 2, canvas.height / 2 + 40)
}

const personagemMorreu = () => {
	acabouJogo = true

	context.fillStyle = "#fff"
	context.textAlign = "center"

	if (personagemPegouNave) {
		limparTela()
		context.font = "80px PixelarRegularW01-Regular"
		context.fillText("Parabéns! Você alcançou o Pudim!", canvas.width / 2, canvas.height / 2)
		mapa = 1
		personagem.width = canvas.width / 20
		personagem.height = canvas.width / 20

		context.font = "40px PixelarRegularW01-Regular"
		context.fillText("Pressione Enter para reniciar a aventura", canvas.width / 2, canvas.height / 2 + 40)
	} else {
		if (mapa == 4) {
			context.font = "80px PixelarRegularW01-Regular"
			context.fillText(`Oh não! O pudim foi abduzido!`, canvas.width / 2, canvas.height / 2)
			mapa = 1
		} else {
			context.font = "80px PixelarRegularW01-Regular"
			context.fillText("Você morreu!", canvas.width / 2, canvas.height / 2)
		}
		context.font = "40px PixelarRegularW01-Regular"
		context.fillText("Pressione Enter para tentar novamente", canvas.width / 2, canvas.height / 2 + 40)
	}
}

const mensagemPegarChave = () => {
	context.fillStyle = "#fff"
	context.font = "20px PixelarRegularW01-Regular"
	if (pegouChave == false)
		context.fillText("Você precisa da chave!", porta.x + 20, porta.y + porta.height + 25)
	else
		context.fillText("Você tem a chave!", porta.x + 20, porta.y + porta.height + 25)
}