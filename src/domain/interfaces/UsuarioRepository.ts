import Usuario from "../entities/Usuario";

export default interface UsuarioRepository {
    create(usuario: Usuario): Promise<Usuario>;
    update(usuario: Usuario): Promise<void>;
    findAll(): Promise<Usuario[]>;
    login(email: string, password: string): Promise<Usuario | null>;
    logout(id: string): Promise<void>;
}