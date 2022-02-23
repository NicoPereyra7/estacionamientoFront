export interface UsuarioI {
    id: number;
    mail: String;
    telefono: String;
    cuentaCorriente: {
        id: number;
        saldo: number;
        telefono: number;
    };
}
