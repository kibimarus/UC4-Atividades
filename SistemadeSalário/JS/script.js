class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

class Gerente extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 1.20; 
    }
}

class Desenvolvedor extends Funcionario {
    calcularSalario() {
        return this.salarioBase * 1.10; 
    }
}

class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = []; 
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    calcularTotalSalarios() {
        let total = 0;
        for (let f of this.funcionarios) {
            total += f.calcularSalario();
        }
        return total;
    }

    
    listarFuncionarios() {
        console.log(`Funcionários do departamento ${this.nome}:`);
        for (let f of this.funcionarios) {
            console.log(`- ${f.nome} (${f.constructor.name}): R$ ${f.calcularSalario()}`);
        }
    }
}

// funcionarios
let g = new Gerente("Camila", 5000);
let dev = new Desenvolvedor("Lucas", 4000);


let ti = new Departamento("TI");
ti.adicionarFuncionario(g);
ti.adicionarFuncionario(dev);

// Resultados
console.log(`O salário do gerente ${g.nome} é R$ ${g.calcularSalario()}`);
console.log(`O salário do desenvolvedor ${dev.nome} é R$ ${dev.calcularSalario()}`);

ti.listarFuncionarios();
console.log(`Total de salários do departamento: R$ ${ti.calcularTotalSalarios()}`);