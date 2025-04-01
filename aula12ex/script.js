
var imagem = document.getElementById('imagem')
var texto = document.getElementsByTagName('h1')[0]
var agora = new Date()
var hora = agora.getHours()
var relogio = window.document.getElementsByTagName('h2')[0]
relogio.innerText = `Agora são ${hora}hrs`


if(hora>= 19 && hora<24){
    document.body.style.background='#2A281C'
    texto.innerHTML = 'Boa noite...'
    imagem.style.backgroundImage = "url('imagem/noite-500px.jpg')"
}else if(hora >= 0 && hora <12){
    document.body.style.background= '#E3D7B1'
    texto.innerHTML= 'Bom Diaaa!'
    imagem.style.backgroundImage= "url('imagem/morning-foto-500px.jpg')"
}else {
    document.body.style.background= '#BF6731'
    texto.innerHTML= ' Boa tardee.'
    imagem.style.backgroundImage ="url('imagem/afternoon-480px.jpg')"
}
