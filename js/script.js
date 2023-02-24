
const jogador = document.getElementById('jogador');
const obstaculo = document.getElementById('obstaculo');

function pular(event) { 
  const keyTecla = event.key;
  
  if (keyTecla == ' ') {
    jogador.classList.add('pular');

    setTimeout(()=> {
    jogador.classList.remove('pular');
    }, 1000)
    
  }
}

const perdeu = setInterval(() => {

  const obstaculoPosition = obstaculo.offsetLeft;
  const jogadorPosition = +window.getComputedStyle(jogador).bottom.replace('px', '');
  


  if (obstaculoPosition <= 40 && jogadorPosition <= 40) {
    obstaculo.style.animation = 'none';
    obstaculo.style.left = `${obstaculoPosition}px`;

    jogador.style.animation = 'none';
    jogador.style.bottom = `${jogadorPosition}px`;
  }
  
},10)

document.addEventListener('keypress', pular);






