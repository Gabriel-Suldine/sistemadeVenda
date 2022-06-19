let read = require('readline-sync')
let valor_compra, valor_avista, valor_divido,parcelas
console.log("Lojinha de Vendas")
console.log("===========================")
valor_compra = read.questionInt("Qual o valor da compra? R$ ")
parcelas = read.questionInt("Em quantas Vezes?  (Caso avista digite 0)")
valor_avista = valor_compra - (valor_compra * 0.1)
valor_divido = valor_compra / parcelas
console.log("===========================")
console.log("===========================")
console.log("Valor da compra R$ ", valor_compra,"\nValor a vista com Desconto (10%) R$",valor_avista,"  \nparcelado em ",parcelas," Vezes de R$ ",valor_divido)
