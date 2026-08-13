const Aluno = require('../models/Aluno')

let resposta = document.getElementById('resposta')
let btnPrincipal = document.getElementById('btnPrincipal')

btnPrincipal.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let idade = Number(document.getElementById('idade').value)
    let genero = document.getElementById('genero').value

    const aluno1 = new Aluno(nome,peso,altura,idade,genero)
    let tmbAluno1 = aluno1.calcularTMB()
    let verClasseAluno1 = aluno1.verClasseMet()

console.log(`A taxa Metabólica do ${aluno1.nome} é: ${tmbAluno1.toFixed(2)}`)
console.log(`A classificação Metabólica do ${aluno1.nome} é: ${verClasseAluno1}`)

})

//         const aluno1 = new Aluno('Gabriel',78.0,175.0,22,'M')
//         const aluno2 = new Aluno('Camila',58.0,162.0,28,'F')

// describe('Teste Unitário dos Sistemas de Classificação Metabólica',()=>{
//     test('Teste do método calcularTMB da classe aluno Masculino',()=>{
//         expect(aluno1.calcularTMB()).toBeCloseTo(1848.16, 2)
//     })
//     test('Teste do método calcularTMB da classe aluno Feminino',()=>{
//         expect(aluno2.calcularTMB()).toBeCloseTo(1364.56,2)
//     })
//     test('Teste do método classe metabólica da classe aluno Masculino',()=>{
//         const aluno1 = new Aluno('Gabriel',78.0,175.0,22,'M')
//         expect(aluno1.verClasseMet()).toBe('Metabolismo Normal')
//     })
//      test('Teste do método classe metabólica da classe aluno Feminino',()=>{
//         const aluno2 = new Aluno('Camila',58.0,162.0,28,'F')
//         expect(aluno2.verClasseMet()).toBe('Metabolismo Normal')
//     })
// })
