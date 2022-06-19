export class User{
    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public usuario: string;


    constructor()
    constructor(
        id?: number,
        nome?: string,
        senha?: string,
        usuario?: string,
        email?: string) {
            this.id=id? id : 0;
            this.nome=nome? nome : '';
            this.senha=senha? senha:'';
            this.usuario=usuario? usuario:'';
            this.email=email? email : '';
    }
}