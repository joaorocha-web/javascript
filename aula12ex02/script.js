function exibir(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inasc')
    var res = document.querySelector('div#result')
    var idade = (ano - Number(fano.value))
    
   
   
    if(fano.value.length == 0 || fano.value>ano){
        alert('[ERRO]!! Tente outros dados')
    } else {
        var genero = ""
        var sexo = document.getElementsByName('sex')
        var imagem = document.createElement ('img')
        imagem.setAttribute('id', 'foto')
        if (sexo[0].checked){
            genero = 'homem'
            if(idade < 15 ){
                imagem.setAttribute('src', 'imagens/a-criança-mais-feia-300px.jpg')
            }else if(idade <25){
                imagem.setAttribute( 'src', 'imagens/o-segundo-mais-lindo-300px.jpg')
            }else {
                imagem.setAttribute('src', 'imagens/varão-valoroso-300px.jpg')
            }

        }else{
            genero = 'mulher'
            if(idade < 15 ){
                imagem.setAttribute('src', 'imagens/a-criança-mais-feia-300px.jpg')
            }else if(idade <25){
                imagem.setAttribute('src', 'imagens/a-mais-linda-do-mundo-300px.jpg')
            }else {
                imagem.setAttribute('src', 'imagens/rainha-300px.jpg')
            }
        }
        res.style.padding = '20px'
        res.style.textAlign ='center'
        res.innerHTML = `Encontramos: <strong>${genero}</strong> com <strong>${idade} anos</strong>`
        imagem.style.margin = '20px auto'
        imagem.style.borderRadius = '50%'
        imagem.style.boxShadow ='2px 1px 7px black'
        res.appendChild(imagem)
    }
        
    
        
    
}