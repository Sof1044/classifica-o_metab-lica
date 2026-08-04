const Aluno = require('./models/Aluno')

const aluno1 = new Aluno('Gabriel', 78, 175, 22, 'M')
// const aluno2 = new Aluno('Gabriel', 78, 175, 22, 'M')

let tmbAluno1 = aluno1.calcularTMB()
let verClasseAluno1 = aluno1.verClasseMet()

console.log(`A taxa Metabólica do ${aluno1.nome} é: ${tmbAluno1.toFixed(2)}`)
console.log(`A classificação Metabólica do ${aluno1.nome} é: ${verClasseAluno1}`)