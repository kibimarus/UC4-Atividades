class Autor {
    constructor(nome, nacionalidade) {
      this.nome = nome
      this.nacionalidade = nacionalidade
    }
  }
  
  class Livro {
    constructor(titulo, autor, preco) {
      this.titulo = titulo
      this.autor = autor
      this.preco = preco
    }
  
    mostrarLivro() {
      console.log(`Título: ${this.titulo}`)
      console.log(`Autor: ${this.autor.nome}`)
      console.log(`Nacionalidade: ${this.autor.nacionalidade}`)
      console.log(`Preço: R$ ${this.preco.toFixed(2)}`)
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome
      this.livrosComprados = []
    }
  
    comprarLivro(livro) {
      this.livrosComprados.push(livro)
      console.log(`${this.nome} comprou: ${livro.titulo} de ${livro.autor.nome}`)
    }
  
    compararLivro(livro) {
      for (const livroComprado of this.livrosComprados) {
        if (livroComprado.titulo === livro.titulo) {
          console.log("O cliente já comprou este livro.")
          return
        }
      }
      console.log("O cliente ainda não comprou este livro.")
    }
  
    calcularTotalGasto() {
      let total = 0
      for (const livro of this.livrosComprados) {
        total += livro.preco
      }
      return total
    }
  }
  
  const autor1 = new Autor("Colleen Hoover", "Estadunidense")
  const livro1 = new Livro("Verity", autor1, 53.00)
  
  const autor2 = new Autor("John Green", "Estadunidense")
  const livro2 = new Livro("A Culpa é das Estrelas", autor2, 34.99)
  
  const autor3 = new Autor("Christian Figueiredo de Caldas", "Brasileiro")
  const livro3 = new Livro("Eu Fico Loko: as Desaventuras de um Adolescente nada Convencional", autor3, 14.79)
  
  const autor4 = new Autor("Tia Má (Maíra Azevedo)", "Brasileira")
  const livro4 = new Livro("Como se Livrar de um Relacionamento Ordinário", autor4, 23.08)
  
  const autor5 = new Autor("Talita Rebouças", "Brasileira")
  const livro5 = new Livro("Fala Sério, Mãe!", autor5, 35.00)
  
  const cliente1 = new Cliente("Letícia")
  
  cliente1.comprarLivro(livro1)
  cliente1.comprarLivro(livro2)
  
  cliente1.compararLivro(livro1) // já comprou
  cliente1.compararLivro(livro3) // ainda não comprou
  
  console.log(`Total gasto: R$ ${cliente1.calcularTotalGasto().toFixed(2)}`)
  
  livro1.mostrarLivro()