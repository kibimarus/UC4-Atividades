class Animal{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    
    emitirSom(){
        console.log("Cocóricó")
    }
}

class Cachorro extends Animal{
    constructor(nome,idade){
    super(nome,idade)
    this.emitirSom
    }

    emitirSom(){
        console.log("O Cachorro faz: Au Au")
    }

}

class Gato extends Animal{
    constructor(nome,idade){
    super(nome,idade)

    }
    emitirSom(){
        console.log("O Gato faz: Miau ")
    }
    
}

let cachorro1 = new Cachorro ("Niko","3")
let gato1 = new Gato ("Nina", "2")

cachorro1.emitirSom()
gato1.emitirSom()