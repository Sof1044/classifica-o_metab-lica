class Aluno{
    constructor(nome, peso, altura, idade, genero){
        this.nome = nome
        this.peso = peso
        this.altura = altura
        this.idade = idade
        this.genero = genero
    }

    calcularTMB(){
        // Masculino
        // TMB = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 *  idade
        if(this.genero === 'M'){
            return 88.362 + (13.397 * this.peso) + (4.799 * this.altura) - (5.677 *  this.idade)

        // feminino
        // TMB = 447.593 + 9.247 * peso + 3.098 * altura + 4.330 * idade
        }else if(this.genero === 'F'){
            return 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * this.idade)
        }
    }
    verClasseMet(){
        if(this.genero === 'M'){
            if(this.calcularTMB() < 0){
                return 'Valor inválido!'
            }else if(this.calcularTMB() >= 0 && this.calcularTMB() < 1500){
                return 'Metabolismo Lento'
            }else if(this.calcularTMB() >= 1500 && this.calcularTMB() < 2000){
                return 'Metabolismo Normal'
            }else if(this.calcularTMB() >= 2000){
                return 'Metabolismo Acelerado'
            }
        }else if(this.genero === 'F'){
             if(this.calcularTMB() < 0){
                return 'Valor inválido!'
            }else if(this.calcularTMB() >= 0 && this.calcularTMB() < 1200){
                return 'Metabolismo Lento'
            }else if(this.calcularTMB() >= 1200 && this.calcularTMB() < 1600){
                return 'Metabolismo Normal'
            }else if(this.calcularTMB() >= 1600){
                return 'Metabolismo Acelerado'
            }
        }
    }
}

module.exports = Aluno