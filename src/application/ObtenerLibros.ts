import LibroRepository from "../domain/interfaces/LibroRepository";

export default class ObtenerLibro {
    constructor(private readonly libroRepository: LibroRepository) {
        
    }

    async ejecutar() {
        const libros = await this.libroRepository.findAll();

        return libros;
    }
}