let canvas = document.getElementById('game')
let context = canvas.getContext('2d')
let fpsInterval = 1000 / 30, now, then = Date.now(), elapsed;
/*
	Inicia as variáveis globais
*/
let iniciarJogo = false
let acabouJogo = false
let pegouChave = false
let proximaFase = false
let parada = false 
let personagemPegouNave = false
let teclas = []
let movimentoPlataformaTipo2 = 0
let mapa = 1

canvas.width = window.innerWidth; // largura do canvas de acordo com a resolucao 
canvas.height = window.innerHeight; // altura do canvas de acordo com a resolucao

let door_image = new Image()
door_image.src = "./img/door.png";

let key_image = new Image()
key_image.src = "./img/chave.png"

const PALETA_COR = {
	verde_claro: '#83e04c',
	verde_escuro: '#39855a',
	marrom: '#724539'
}

let personagem = {
	x: 5,
	y: canvas.height - 100,
	width: canvas.width / 20,
	height: canvas.width / 20,
	velX: 0,
	velY: 0,
	velocidade: canvas.width / 300,
	pulando: false,
	chegouNoChao: false,
	forcaPulo: canvas.height / 47.5,
	andarPosicao: "null",
	desenhar: function () {
		if (this.andarPosicao == "esq")
			exibiresq();
		else if (this.andarPosicao == "dir")
			exibirdir();
		else
			exibirdormindo();
	}
}

let porta = {
	x: 0,
	y: 0,
	width: 120,
	height: 184,
	desenhar: function () {
		context.drawImage(door_image, this.x, this.y)
	}
}

let chave = {
	x: 0,
	y: 0,
	width: 80,
	height: 53,
	desenhar: function () {
		context.drawImage(key_image, this.x, this.y)
	}
}

const resolucao = () => {
	let resol = document.querySelector("#resolucao")
	resol.textContent = `${canvas.width} x ${canvas.height}`
}

telaInicialJogo()

const comecarJogo = () => {
	iniciarJogo = true;
	limparTela()
	requestAnimationFrame(iniciar)
}

const reniciar = () => {
	personagem.velY = 0
	personagem.velX = 0

	personagem.velocidade = canvas.width / 300,

	personagem.x = 5;
	personagem.y = canvas.height - 100

	personagem.chegouNoChao = true
	
	posicaopudim = 0;	  				 //   posição para sprite do pudim
	sprite = imagempudimnave;			//    para trocar entre as sprites
	size = 74;					   //	  para definir o tamanho da sprite a ser mostrado (resolução)
	fpsInterval2 = 1000, now2, then2 = Date.now(), elapsed2;//2 controle de fps, a parte do primeiro.  	

	pegouChave = false

	acabouJogo = false

	requestAnimationFrame(iniciar)
}

const definirSprite = () => {
	now = Date.now();
	elapsed = now - then;
	then = now - (elapsed % fpsInterval);
}

const iniciar = () => {
	limparTela()
	desenharPlataformas()
	personagem.desenhar()
	porta.desenhar()
	if (pegouChave == false)
		chave.desenhar()
	movimentacaoPersonagem()
	verificarVidasPersonagem()

	if(mapa == 4)
		exibirnave()
	// verifica se chegou na porta com a chave
	if (verificarColisao(personagem, porta) && pegouChave){
		setTimeout(jogoCompleto, 250)
		proximaFase = true
	}
	else
		mensagemPegarChave();

	if (verificarColisao(personagem, chave)) {
		pegouChave = true
		chave.x = -chave.width
		chave.y = -chave.height
	}

	if (!acabouJogo) {
		requestAnimationFrame(iniciar)
		definirSprite()
		definirSprite2()
	}
}

const limparTela = () => context.clearRect(0, 0, window.innerWidth, window.innerHeight)


const desenharPlataformas = () => {
	context.fillStyle = PALETA_COR.marrom;

	for (let i = 0; i < plataforma.length; i++) {
		context.fillRect(plataforma[i].x, plataforma[i].y, plataforma[i].width, plataforma[i].height)
		context.lineWidth = 10;
		context.strokeStyle = PALETA_COR.verde_claro;
		context.strokeRect(plataforma[i].x, plataforma[i].y - 2, plataforma[i].width, 5)
	}
}

// cheats
const teleportarPorta = () => {
	personagem.x = porta.x - (porta.width / 2)
	personagem.y = porta.y
}