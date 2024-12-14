export default class Usuario {
    constructor(
        public readonly id: number,
        public password: string,
        public nombre: string,
        public apellidos: string,
        public rol: string,
        public email: string,
        public telefono: string,
        public estado: string,
        public fecha_registro: Date,
    ) {
        
    }
}