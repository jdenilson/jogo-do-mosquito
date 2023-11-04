// variavel da  atura e lagura
var autura =  0
var largura = 0

function ajustaTamanhoPaucoJogo(){
    autura = window.innerHeight
    largura = window.innerWidth

    console.log(autura,largura)

}

ajustaTamanhoPaucoJogo()

function posicaoRandomica(){
// podicao do moquito
var  posicaox = Math.floor(Math.random()*largura)- 90
var  posicaoy = Math.floor(Math.random()*autura) - 90

posicaox = posicaox < 0 ? 0 : posicaox
posicaoy = posicaoy < 0 ? 0 : posicaoy


// criar o elemeto html
var mosqito = document.createElement('img')
mosqito.src = '/mosca.png'
mosqito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosqito.style.left = posicaox + 'px'
mosqito.style.top = posicaoy + 'px'
mosqito.style.position = 'absolute'

document.body.appendChild(mosqito)
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*3)
    switch(classe){

        case 0 :
            return 'mosquito1'

        case 1 :
            return 'mosquito2'    
        
        case 2 :
            return 'mosquito3'        
    }

}

function ladoAleatorio(){
  var classe = Math.floor(Math.random()* 2)

switch(classe){
   case 0 :
    return 'ladoA'

   case 1 :
    return 'ladoB'
        
}


}


