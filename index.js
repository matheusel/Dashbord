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