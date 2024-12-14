import LibroRepository from "../domain/interfaces/LibroRepository";

export default class ObtenerLibro {
    constructor(private readonly libroRepository: LibroRepository) {
        
    }

    async ejecutar(id: number) {
        const libroEncontrado = await this.libroRepository.findById(id);
        if (!libroEncontrado) {
            throw new Error("No se pudo encontrar el Libro");
        }

        return libroEncontrado;
    }
}