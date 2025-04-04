function fatorial(n){
    let result = 1 
    for (var c=n; c>1;c--){
        result*=c
    }
    return result
}

console.log(fatorial(5))