export interface usuarioI{
id:number;
clave:String;
mail:String;
telefono:String; 
cuentaCorriente:{
    id:number,
    saldo:number,
    telefono:number
}
}