function tabuada(){
    var txn = document.getElementById('txn')
    var res = document.getElementById('res')
    
    if(txn.value.length==0){
        alert('[ERRO], Digite algum número')
    }else{
        let n = Number(txn.value)
        res.innerHTML=''
        for (var c=1; c<=9; c++){
            res.innerHTML+=`<p>${n}x${c}= <strong>${n*c}</strong></p> `
        }
    }
}