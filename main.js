
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Podemos observar a quantidade de classe tipo 'tecla'
        // console.log(listaDeTeclas)

for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];  //[0-8] Para 9 instrumentos. O contador seleciona a Tecla subsequente a cada iteração
    const instrumento = tecla.classList[1]; //[1] Segundo elemento retornado por .classList = classe 'tecla_id'

    const idAudio = `#som_${instrumento}`; //idAudio vai ser igual a id '#som_' + 'tecla_id' formando o id do instrumento da respectiva posição [n]

    tecla.onclick = function () {
        tocaSom(idAudio); // Toca o audio do instrumento selecionado por 'idAudio' ao executar a ação de click no botão
    }

    tecla.onkeydown = function (evento) {   //Navegação com 'TAB' do Teclado

        // console.log(evento);
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
    }


}