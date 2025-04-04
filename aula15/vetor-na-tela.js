let valores = [2,4,8,3,9,1,5]
valores.sort()

/*
for (let pos = 0; pos<valores.length; pos++){
    console.log(` ${valores[pos]}°`)
}*/

for(let pos in valores){
    console.log(`A ${pos}° posição tem o valor: ${valores[pos]} `)
}

console.log(valores.indexOf(9))