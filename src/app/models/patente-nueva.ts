export class PatenteNueva {
    id!: number;
    patente!: string;
    usuario_id: number;
    constructor(patente: string, usuario_id: number) {
        this.patente = patente;
        this.usuario_id = usuario_id;
    }
}
