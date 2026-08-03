// desafio de notas
let aluno = "Breno"
let notaFinal = 7.69
let situacao = " "

if(notaFinal < 5){
    situacao = "reprovado."

}else if(notaFinal <= 6.9){
    situacao = "recuperação."

}else if( notaFinal <= 8.9){
    situacao = "aprovado"
}else{
    situacao = "aprovado com honras"
}

console.log(`O Aluno ${aluno} foi ${situacao} pois a sua nota final foi ${notaFinal}.`)