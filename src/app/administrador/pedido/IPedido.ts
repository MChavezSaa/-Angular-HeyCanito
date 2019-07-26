export interface IPedido {
    nombre:string,
    rut:string,
    telefono:string,
    direccion: string,
    mail:string,
    modo_entrega: string,
    fecha_inicio: Date,
    fecha_entrega: Date,
    fecha_pago: Date,
    valor_total: number,
    metodo_pago: string,
    estado: string
}
