export class Filme{
    public id: number;
    public nome: string;
    public descricao: string;
    public foto: string;

    constructor()
    constructor(
        id?: number,
        nome?: string,
        descricao?: string,
        foto?: string) {
            this.id=id? id : 0;
            this.nome=nome? nome : '';
            this.descricao=descricao? descricao : '';
            this.foto=foto? foto : ''; 
    }
}