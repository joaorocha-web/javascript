function contar(){
    var txc = document.getElementById('inicio')
    var txl = document.getElementById('fim')
    var txp = document.getElementById('passo')
    var l = Number(txl.value)
    var p = Number(txp.value)
    var res = document.getElementById('contagem')
    var c = Number(txc.value)
    if( txc.value.length == 0 || txl.value.length == 0 || txp.value.length ==0){
        alert('[ERRO] Dados inválidos para contagem - segue uma contagem de 1 até 10')
        res.innerHTML = 'Impossível contar'
    }else{
       if(c<l) {
        while (c<=l){
            res.innerHTML+= `${c} \u{1F449} `
            c+=p
            }
       }
       else if(c>l){
        while (c>=l){
            res.innerHTML += `${c} \u{1F449}`
            c-=p
        }
       }
    }
    

}

/*for (var c = Number(txc.value); c <= l; c+= p){
    res.innerText +=( `${c} /`)
}*/