export class PatenteI {
    id!: number;
    patente!: string;
    usuario!: {
        id: number;
    };
    constructor(patente: string, usuario_id: number) {
        this.patente = patente;
        this.usuario = { id: usuario_id };
    }
}
