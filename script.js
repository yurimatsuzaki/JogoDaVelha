var jogador = 0
var OrdemJogada = document.getElementById("jogador")
var placarAmarelo = document.getElementById('placar-amarelo')
var placarAzul = document.getElementById('placar-azul')
var Cont1 = 0
var Cont2 = 0

var quadrado1 = document.getElementById("0-0");
var quadrado2 = document.getElementById("0-1");
var quadrado3 = document.getElementById("0-2");
var quadrado4 = document.getElementById("1-0");
var quadrado5 = document.getElementById("1-1");
var quadrado6 = document.getElementById("1-2");
var quadrado7 = document.getElementById("2-0");
var quadrado8 = document.getElementById("2-1");
var quadrado9 = document.getElementById("2-2");


function jogada00() {
  if (quadrado1.style.backgroundColor == "yellow" || quadrado1.style.backgroundColor == "blue") {
    alert("Escolha outro quadrado!");
  }

  else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
  
  else {
    if (jogador == 0) {
      quadrado1.style.backgroundColor = "yellow";
      quadrado1.style.borderRadius='100%'
      jogador = 1;
      OrdemJogada.innerHTML = "Vez do jogador azul";
      vitoria()
      cont()
      empate()
    } else {
      quadrado1.style.backgroundColor = "blue";
      quadrado1.style.borderRadius='30%'
      jogador = 0;
      OrdemJogada.innerHTML = "Vez do jogador amarelo";
      vitoria()
      cont()
      empate()
    }
  }
}


function jogada01() {
  if (
    quadrado2.style.backgroundColor == "yellow" ||
    quadrado2.style.backgroundColor == "blue"
  ) {
    alert("Escolha outro quadrado!");
  }
  
  else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
  else {
    if (jogador == 0) {
      quadrado2.style.backgroundColor = "yellow";
      quadrado2.style.borderRadius='100%'
      jogador = 1;
      OrdemJogada.innerHTML = "Vez do jogador azul";
      vitoria()
      cont()
      empate()
    } else {
      quadrado2.style.backgroundColor = "blue";
      quadrado2.style.borderRadius='30%'
      jogador = 0;
      OrdemJogada.innerHTML = "Vez do jogador amarelo";
      vitoria()
      cont()
      empate()
    }
  }
}


function jogada02() {
  if (
    quadrado3.style.backgroundColor == "yellow" ||
    quadrado3.style.backgroundColor == "blue"
  ) {
    alert("Escolha outro quadrado!");
  }
  
  else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
  else {
    if (jogador == 0) {
      quadrado3.style.backgroundColor = "yellow";
      quadrado3.style.borderRadius='100%'
      jogador = 1;
      OrdemJogada.innerHTML = "Vez do jogador azul";
      vitoria()
      cont()
      empate()
    } else {
      quadrado3.style.backgroundColor = "blue";
      quadrado3.style.borderRadius='30%'
      jogador = 0;
      OrdemJogada.innerHTML = "Vez do jogador amarelo";
      vitoria()
      cont()
      empate()
    }
  }
}


function jogada10() {
  if (
    quadrado4.style.backgroundColor == "yellow" ||
    quadrado4.style.backgroundColor == "blue"
  ) {
    alert("Escolha outro quadrado!");
  }
  
  else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
  else {
    if (jogador == 0) {
      quadrado4.style.backgroundColor = "yellow";
      quadrado4.style.borderRadius='100%'
      jogador = 1;
      OrdemJogada.innerHTML = "Vez do jogador azul";
      vitoria()
      cont()
      empate()
    } else {
      quadrado4.style.backgroundColor = "blue";
      quadrado4.style.borderRadius='30%'
      jogador = 0;
      OrdemJogada.innerHTML = "Vez do jogador amarelo";
      vitoria()
      cont()
      empate()
    }
  }
}


function jogada11() {
  if (
    quadrado5.style.backgroundColor == "yellow" ||
    quadrado5.style.backgroundColor == "blue"
  ) {
    alert("Escolha outro quadrado!");
  }
  
  else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
  else {
    if (jogador == 0) {
      quadrado5.style.backgroundColor = "yellow";
      quadrado5.style.borderRadius='100%'
      jogador = 1
      OrdemJogada.innerHTML = "Vez do jogador azul";
      vitoria()
      cont()
      empate()
    } else {
      quadrado5.style.backgroundColor = "blue";
      quadrado5.style.borderRadius='30%'
      jogador = 0;
      OrdemJogada.innerHTML = "Vez do jogador amarelo";
      vitoria()
      cont()
      empate()
    }
  }
}


function jogada12() {
    if (
      quadrado6.style.backgroundColor == "yellow" ||
      quadrado6.style.backgroundColor == "blue"
    ) {
      alert("Escolha outro quadrado!");
    }
    
    else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
 
    else {
      if (jogador == 0) {
        quadrado6.style.backgroundColor = "yellow";
        quadrado6.style.borderRadius='100%'
        jogador = 1
        OrdemJogada.innerHTML = "Vez do jogador azul";
        vitoria()
        cont()
        empate()
      } else {
        quadrado6.style.backgroundColor = "blue";
        quadrado6.style.borderRadius='30%'
        jogador = 0;
        OrdemJogada.innerHTML = "Vez do jogador amarelo";
        vitoria()
        cont()
        empate()
      }
    }
  }


  function jogada20() {
    if (
      quadrado7.style.backgroundColor == "yellow" ||
      quadrado7.style.backgroundColor == "blue"
    ) {
      alert("Escolha outro quadrado!");
    }
    
    else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
 
    else {
      if (jogador == 0) {
        quadrado7.style.backgroundColor = "yellow";
        quadrado7.style.borderRadius='100%'
        jogador = 1
        OrdemJogada.innerHTML = "Vez do jogador azul";
        vitoria()
        cont()
        empate()
      } else {
        quadrado7.style.backgroundColor = "blue";
        quadrado7.style.borderRadius='30%'
        jogador = 0;
        OrdemJogada.innerHTML = "Vez do jogador amarelo";
        vitoria()
        cont()
        empate()
      }
    }
  }


  function jogada21() {
    if (
      quadrado8.style.backgroundColor == "yellow" ||
      quadrado8.style.backgroundColor == "blue"
    ) {
      alert("Escolha outro quadrado!");
    }
    
    else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
 
    else {
      if (jogador == 0) {
        quadrado8.style.backgroundColor = "yellow";
        quadrado8.style.borderRadius='100%'
        jogador = 1
        OrdemJogada.innerHTML = "Vez do jogador azul";
        vitoria()
        cont()
        empate()
      } else {
        quadrado8.style.backgroundColor = "blue";
        quadrado8.style.borderRadius='30%'
        jogador = 0;
        OrdemJogada.innerHTML = "Vez do jogador amarelo";
        vitoria()
        cont()
        empate()
      }
    }
  }


  function jogada22() {
    if (
      quadrado9.style.backgroundColor == "yellow" ||
      quadrado9.style.backgroundColor == "blue"
    ) {
      alert("Escolha outro quadrado!");
    }
    
    else if(vitoria() == 0 || vitoria() == 1){
    alert("Recomece o jogo!");
  }
 
    else {
      if (jogador == 0) {
        quadrado9.style.backgroundColor = "yellow";
        quadrado9.style.borderRadius='100%'
        jogador = 1
        OrdemJogada.innerHTML = "Vez do jogador azul";
        vitoria()
        cont()
        empate()
      } else {
        quadrado9.style.backgroundColor = "blue";
        quadrado9.style.borderRadius='30%'
        jogador = 0;
        OrdemJogada.innerHTML = "Vez do jogador amarelo";
        vitoria()
        cont()
        empate()
      }
    }
  }


function reset() {
  for (let index = 0; index < 9; index++) {
    let quad = document.getElementsByClassName("quad")[index];
    quad.style.backgroundColor = "white";
    quad.style.borderRadius='0px';
  }
  OrdemJogada.innerHTML = " ";
}

function cont(){
  if(vitoria() == 0){
    Cont1++
    placarAmarelo.innerHTML=(`${Cont1}`)
  }
  else if(vitoria() == 1){
    Cont2++
    placarAzul.innerHTML=(`${Cont2}`)
  }
}

function vitoria(){
    if(quadrado1.style.backgroundColor == 'yellow' && quadrado2.style.backgroundColor == 'yellow' && quadrado3.style.backgroundColor == 'yellow' || quadrado4.style.backgroundColor == 'yellow' && quadrado5.style.backgroundColor == 'yellow' && quadrado6.style.backgroundColor == 'yellow' || quadrado7.style.backgroundColor == 'yellow' && quadrado8.style.backgroundColor == 'yellow' && quadrado9.style.backgroundColor == 'yellow' || quadrado1.style.backgroundColor == 'yellow' && quadrado4.style.backgroundColor == 'yellow' && quadrado7.style.backgroundColor == 'yellow' || quadrado2.style.backgroundColor == 'yellow' && quadrado5.style.backgroundColor == 'yellow' && quadrado8.style.backgroundColor == 'yellow' || quadrado3.style.backgroundColor == 'yellow' && quadrado6.style.backgroundColor == 'yellow' && quadrado9.style.backgroundColor == 'yellow' || quadrado1.style.backgroundColor == 'yellow' && quadrado5.style.backgroundColor == 'yellow' && quadrado9.style.backgroundColor == 'yellow' || quadrado3.style.backgroundColor == 'yellow' && quadrado5.style.backgroundColor == 'yellow' && quadrado7.style.backgroundColor == 'yellow'){
            OrdemJogada.innerHTML = "VITÓRIA DO AMARELO!";

            return 0;
          }
          
          else if(quadrado1.style.backgroundColor == 'blue' && quadrado2.style.backgroundColor == 'blue' && quadrado3.style.backgroundColor == 'blue' || quadrado4.style.backgroundColor == 'blue' && quadrado5.style.backgroundColor == 'blue' && quadrado6.style.backgroundColor == 'blue' || quadrado7.style.backgroundColor == 'blue' && quadrado8.style.backgroundColor == 'blue' && quadrado9.style.backgroundColor == 'blue' || quadrado1.style.backgroundColor == 'blue' && quadrado4.style.backgroundColor == 'blue' && quadrado7.style.backgroundColor == 'blue' || quadrado2.style.backgroundColor == 'blue' && quadrado5.style.backgroundColor == 'blue' && quadrado8.style.backgroundColor == 'blue' || quadrado3.style.backgroundColor == 'blue' && quadrado6.style.backgroundColor == 'blue' && quadrado9.style.backgroundColor == 'blue' || quadrado1.style.backgroundColor == 'blue' && quadrado5.style.backgroundColor == 'blue' && quadrado9.style.backgroundColor == 'blue' || quadrado3.style.backgroundColor == 'blue' && quadrado5.style.backgroundColor == 'blue' && quadrado7.style.backgroundColor == 'blue'){
            OrdemJogada.innerHTML = "VITÓRIA DO AZUL!";

            return 1;
    }
}

function empate(){
  for(let i = 0; i < 9; i++){
    let quadra = document.getElementsByClassName("quad")[i];

    if(quadra.style.backgroundColor != 'white' && vitoria() != 0 && vitoria() != 1){
      OrdemJogada.innerHTML = "EMPATE!!";
    }
  }
}
