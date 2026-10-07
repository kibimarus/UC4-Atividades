class Livros{
    constructor(titulo,autor,preco){
        this.titulo = titulo
        this.autor = autor
        this.preco =preco

    }
}

class Autores{
    constructor(nome,nacionalidade){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
}

class Cliente{
    constructor(nome,livrosComprados){
        this.nome = nome
        this.livrosComprados = livrosComprados
    }

}


let livro1 = new Livros ("Colapso") 