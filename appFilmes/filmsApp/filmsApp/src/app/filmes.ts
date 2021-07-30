export class Filmes {
    nome: string;
    ano: any;
    diretor: string;
    genero: string;
    descricao: string;
    poster: any;

    constructor(nome: string, ano: any, diretor: string, genero: string, descricao: string, poster: any) {
        this.nome = nome;
        this.ano = ano;
        this.diretor = diretor;
        this.genero = genero;
        this.descricao = descricao;
        this.poster = poster
    }
}
