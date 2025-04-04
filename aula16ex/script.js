let ntx = document.getElementById('inum')
let valores = []
let tab = document.querySelector('select#itab')
let res = document.querySelector('div#res')

ntx.focus()
ntx.addEventListener('keydown', function(teclar){
    if(teclar.key=== "Enter"){
        inserir()
    }
})

function validado(x){
    if (x>=1 && x<=100){
        return true
    } else {
        return false
    }
}

function inlista(v, list){
    if( list.indexOf(v) != -1){
        return true
    } else {
        return false
    }
}

function inserir(){
    let n = Number(ntx.value)
   if (validado(n) && !inlista(n, valores)){
        valores.push(n)
        item = document.createElement('option')
        item.text= `Número ${n} ${String.fromCodePoint(0x2705)}`
        tab.appendChild(item)
        res.innerHTML=''
        ntx.value= ''
        ntx.focus()
   } else{
    alert('Número inválido')
    ntx.value=''
    ntx.focus()
   }
}

function soma(q, list){
    let soma = 0 
    for (let c = q; c>=0; c--){
        soma = soma+ list[c]
    }
    return soma
}

function analisar(){
    valores.sort()
    res.innerHTML += `<p>Foram adicionados ao todo ${valores.length} números.</p>
    <p> Maior valor adicionado:<strong> ${valores[valores.length-1]}</strong></p> <p>Menor valor adicionado: <strong>${valores[0]}</strong></p> <p>Soma de todos os valores: <strong>${soma(valores.length-1, valores)}</strong></p> Média de todos os valores: <strong>${(soma(valores.length-1, valores)/valores.length).toFixed(2)} </strong>`


}

res.style.margin= '10px'


