var controlhe = []
var jogador = 0
var OrdemJogada = document.getElementById('jogador')
var vitoria = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

        function jogada00(){
            let quadrado1 = document.getElementById('0-0')
            
            if(jogador == 0){
                quadrado1.style.backgroundColor='yellow'
                jogador = 1
                controlhe += 1
                OrdemJogada.innerHTML='Vez do jogador azul'
                console.log(`${controlhe}`)
            }else{
                quadrado1.style.backgroundColor='blue'
                jogador = 0
                controlhe += 0
                OrdemJogada.innerHTML='Vez do jogador amarelo'
                console.log(`${controlhe}`)
            }
        }
        
        function jogada01(){
            let quadrado2 = document.getElementById('0-1')
            
            if(jogador == 0){
                quadrado2.style.backgroundColor='yellow'
                jogador = 1
                controlhe += 1
                OrdemJogada.innerHTML='Vez do jogador azul'
                console.log(`${controlhe}`)
            }else{
                quadrado2.style.backgroundColor='blue'
                jogador = 0
                controlhe += 0
                OrdemJogada.innerHTML='Vez do jogador amarelo'
                console.log(`${controlhe}`)
            }
        }
        
        function jogada02(){
            let quadrado3 = document.getElementById('0-2')
            
            if(jogador == 0){
                quadrado3.style.backgroundColor='yellow'
                jogador = 1
                controlhe += 1
                OrdemJogada.innerHTML='Vez do jogador azul'
                console.log(`${controlhe}`)
            }else{
                quadrado3.style.backgroundColor='blue'
                jogador = 0
                controlhe += 0
                OrdemJogada.innerHTML='Vez do jogador amarelo'
                console.log(`${controlhe}`)
            }
        }

        function reset(){
            for(let index = 0; index < 9; index++){
                let quad = document.getElementsByClassName('quad')[index]
                quad.style.backgroundColor='white'
            }

            OrdemJogada.innerHTML=' '
        }

