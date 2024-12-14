export default class Libro {
    constructor(
        public readonly id: number,
        public titulo: string,
        public paginas: number,
        public precio: number,
        public fecha_publicacion: Date,
        public usuario_id?: number,
    ) {
        
    }
}