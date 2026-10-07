class Pokemon{
    constructor(nome, tipo,nivel,hp,ataque,defesa,poder){
        this.nome = nome
        this.tipo = tipo
        this.nivel = nivel
        this.hp = hp
        this.ataque = ataque
        this.defesa = defesa
        this.poder = poder
    }

    Atacar(){
        console.log(`O ${this.nome} atacou usando ${this.poder}`)
    }

    exibirDetalhes(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Nível: ${this.nivel}`)
        console.log(`Hp: ${this.hp}`)
        console.log(`Ataque: ${this.ataque}`)
        console.log(`Defesa: ${this.defesa}`)
        console.log(`Poder: ${this.poder}`)

    }
}




let Pokemon1 = new Pokemon ("Glaceon","Gelo","50","65","60","110","Mist")
let Pokemon2 = new Pokemon ("Mimikyu","Fantasma","30","55","90","80","Phantom Force")
let Pokemon3 = new Pokemon ("Lucário","Aço","40","70","110","70","Metal Claw")

Pokemon1.exibirDetalhes()
console.log("-".repeat(30))
Pokemon2.exibirDetalhes()
console.log("-".repeat(30))
Pokemon3.exibirDetalhes()


console.log("_".repeat(30))
Pokemon1.Atacar()
console.log("-".repeat(30))
Pokemon2.Atacar()
console.log("_".repeat(30))
Pokemon3.Atacar()


