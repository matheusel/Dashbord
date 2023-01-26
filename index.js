const pergunta = document.querySelectorAll('.pergunta') // Ligação com parte pergunta no HTML
const resposta = document.querySelectorAll('.resposta') // Ligação com parte resposta no HTML

for(let i = 0; i < pergunta.length; i++){
    pergunta[i].addEventListener('click', () => { // Evento clicar ocultar ou mostrar resposta 
        if(pergunta[i].classList.toggle('fechar')){ 
            pergunta[i].classList.toggle('fechar')
            resposta[i].classList.toggle('ativar') 
        }else{
            pergunta[i].classList.add('fechar')
            resposta[i].classList.add('ativar')
        }
    })
}

function over1 ( )  {
    document . getElementById ( "vicky" ) . src  =  './img/vicky_color.jpeg' ;
}
function  out1 ( )  {
    document . getElementById ( "vicky" ) . src  =  './img/vick_pretoebranco.jpeg' ;
}

//

function  over2 ( )  {
    document . getElementById ( "val" ) . src  =  './img/val_color.jpeg' ;
}
function out2 ( )  {
    document . getElementById ( "val" ) . src  =  './img/val_pretoebranco.jpeg' ;
}

//

function  over3 ( )  {
    document . getElementById ( "bea" ) . src  =  './img/bea_color.jpeg' ;
}
function out3 ( )  {
    document . getElementById ( "bea" ) . src  =  './img/bea_pretoebranco.jpeg' ;
}

//

function over4 ( )  {
    document . getElementById ( "matheus" ) . src  =  './img/matheus_color.jpg' ;
}
function  out4 ( )  {
    document . getElementById ( "matheus" ) . src  =  './img/matheus_pretoebranco.jpeg' ;
}



