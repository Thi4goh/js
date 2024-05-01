var agora = new Date()
var ano = agora.getFullYear()
var copa = ((ano - 1930) /4) - 2
var int = Number.parseInt(copa)
console.log(`Existiu ${int} copas desde 1930 até a data atual`)