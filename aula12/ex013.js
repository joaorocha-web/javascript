var agora = new Date()
var hora = agora.getHours( )

console.log (`Àgora são exatamente ${hora}hrs` )
if (hora<12){
    console.log (`Bom dia`)
}else if (hora >= 19){
    console.log(`Boa noite`)
}else {
    console.log (`Boa tarde`)
}