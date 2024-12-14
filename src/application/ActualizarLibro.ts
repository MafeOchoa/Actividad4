import Libro from "../domain/entities/Libro";
import LibroRepository from "../domain/interfaces/LibroRepository";

export default class ActualizarLibro {
    constructor(private readonly libroRepository: LibroRepository) {
        
    }

    async ejecutar(libro: Libro) {
        return await this.libroRepository.update(libro);
    }
}