let image = new Image()
image.src = "./img/character.png";//imagem jandi andando

let imagedormindo = new Image()
imagedormindo.src = "./img/characterdormindo.png"//tamanho jant, comprimento=74x74, lembrando que 74 é altura maxima da sprite

let imagemjandinave = new Image()
imagemjandinave.src = "./img/pudinejandinanave.png"

let imagempudimnave = new Image()
imagempudimnave.src = "./img/pudinnanave.png"

let posicaodormindo = 0; 				    //posição para troca na sprint jandi parado(dormindo)
let posicaoXesq = 2070;  				   // posição para troca na sprint (esquerda)
let posicaoXdir = 2070; 				  //  posição para troca na sprint(direita)
let posicaopudim = 0;	  				 //   posição para sprite do pudim
let sprite = imagempudimnave;			//    para trocar entre as sprites
let size = 74;					   //	  para definir o tamanho da sprite a ser mostrado (resolução)
let fpsInterval2 = 1000, now2, then2 = Date.now(), elapsed2;//2 controle de fps, a parte do primeiro.

function exibirdormindo() {
	context.drawImage(imagedormindo, posicaodormindo, 0, 74, 74, personagem.x, personagem.y, personagem.width, personagem.height)
	if (elapsed > fpsInterval) {
		posicaodormindo = posicaodormindo + 90;
		fpsInterval += 5;//Para ajustar o tempo que leva para o jandi dormir;
		posicaodormindo >= 4753 ? posicaodormindo = 3509 : null
	}
}
function exibiresq() {
	context.drawImage(image, posicaoXesq, 0, 74, 74, personagem.x, personagem.y, personagem.width, personagem.height)
	posicaoXesq -= 90;
	if (posicaoXesq <= 0) {
		posicaoXesq = 1980;
	}
	posicaodormindo = 0;
}
function exibirdir() {
	context.drawImage(image, posicaoXesq, 0, 74, 74, personagem.x, personagem.y, personagem.width, personagem.height)
	posicaoXesq += 90;
	if (posicaoXesq >= 4201) {
		posicaoXesq = 2160;
	}
	posicaodormindo = 0;
}


//mapa 4=====================================================================================================
function exibirdiminuindo() {//função recursiva do jandi diminuindo
	if (elapsed2 > fpsInterval2) {
		context.drawImage(imagedormindo, posicaodormindo, 0, 74, 74, personagem.x, personagem.y, size, size)
		size -= 24;
		definirSprite2();
		fpsInterval2 += 500;
		if (size >= 26) {
			exibirdiminuindo();
		}
	}
}

const definirSprite2 = () => {//criando um ensalpso de tempo diferente para evitar mistura.
	now2 = Date.now();
	elapsed2 = now2 - then2;
	then2 = now2 - (elapsed2 % fpsInterval2);
}

function exibirnave() {
	context.drawImage(sprite, posicaopudim, 0, 145, 428, canvas.width / 1.8, canvas.height - 450, 145, 428)
	if (elapsed2 > fpsInterval2) {
		if (((personagem.x >= (canvas.width / 1.8)) && parada != true) && posicaopudim < 145*10) {
			personagemPegouNave = true
			parada = true;
			personagem.x += 300
			posicaodormindo = 0;  //mudando a posição da sprite do jandi dormindo para a primeira posição, onde ele esta acordado
			exibirdiminuindo();//chamando a função exibir dormindo para exibir o jandi diminuindo, antes de trocar para a sprite dele sendo abdusindo	
			fpsInterval2 -= 1500;//para voltar o valor original do ensalpso antes do for.
			sprite = imagemjandinave;
			personagem.width = 0
			personagem.height = 0
			posicaopudim = 0;
		}
		posicaopudim += 145;
		fpsInterval2 += 1;
	}
}
