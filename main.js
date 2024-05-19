/* function teclaPom() {
    //Esta função está selecionando a id som_tecla_pom, e após isso, aplicando a função de play(), para dar play no som
    document.querySelector('#som_tecla_pom').play();
}

function teclaClap() {
    document.querySelector(`#som_tecla_clap`).play();
} 
//Função que está selecionando a class tecla_pom, e ao clicar, aplicará a function teclaPom()
document.querySelector('.tecla_pom').onclick = teclaPom;

document.querySelector('.tecla_clap').onclick = teclaClap; */

function teclaSom(seletorAudio) {
    //Esta função está selecionando a id som_tecla_pom, e após isso, aplicando a função de play(), para dar play no som
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

//Aqui criei uma variavel constante, selecionando todos da variavel tecla, se tornando um array

const listaDeTeclas = document.querySelectorAll('.tecla');

//Referência variável, que sempre receberá um valor novo!
// let contador = 0;

//para
for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template String
    const idAudio = `#som_${instrumento}`;
    //''

    // console.log(idAudio);
    
    tecla.onclick = function() {
        teclaSom(idAudio);
    }
    // console.log(contador);

    tecla.onkeydown = function(evento) {
    //    console.log(evento.code == 'Enter')
        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
        /*if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }*/
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    
}