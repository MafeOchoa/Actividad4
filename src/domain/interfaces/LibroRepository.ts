import Libro from "../entities/Libro";

export default interface LibroRepository {
    findAll(): Promise<Libro[]>;
    findById(id: number): Promise<Libro | null>;
    create(libro: Libro): Promise<void>;
    update(libro: Libro): Promise<void>;
    delete(id: number): Promise<void>;
}