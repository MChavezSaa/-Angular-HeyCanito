export interface IPedido {
    modo_entrega: string,
    fecha_inicio: Date,
    fecha_entrega: Date,
    fecha_pago: Date,
    valor_total: number,
    metodo_pago: string,
    direccion: string,
    estado: string
}