import LibroRepository from "../domain/interfaces/LibroRepository";

export default class EliminarLibro {
    constructor(private readonly libroRepository: LibroRepository) {
        
    }

    async ejecutar(id: number) {
        return await this.libroRepository.delete(id);
    }
}