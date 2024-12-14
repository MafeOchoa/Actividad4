import Libro from "../domain/entities/Libro";
import LibroRepository from "../domain/interfaces/LibroRepository";

export default class CrearLibro {
    constructor(private readonly libroRepository: LibroRepository) {
        
    }

    async ejecutar(nuevoLibro: Libro) {
        return await this.libroRepository.create(nuevoLibro);
    }
}