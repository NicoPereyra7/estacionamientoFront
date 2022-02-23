export class Estacionamiento {
    id!: number;
    patente: String;
    usuario_id: number;
    constructor(patente: string, usuario_id: number) {
        this.patente = patente;
        this.usuario_id = usuario_id;
    }
}
