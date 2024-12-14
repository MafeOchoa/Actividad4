import ActualizarLibro from "../application/ActualizarLibro";
import CrearLibro from "../application/CrearLibro";
import EliminarLibro from "../application/EliminarLibro";
import ObtenerLibro from "../application/ObtenerLibro";
import ObtenerLibros from "../application/ObtenerLibros";
import LibroController from "./controllers/LibroController";
import MySqlLibroRepository from "./repositories/MySqlLibroRepository";


export default class DependencyContainer {
  private static _libroRepository = new MySqlLibroRepository();

  static getLibroRepository() {
    return this._libroRepository;
  }

  static getObtenerLibrosUseCase() {
    return new ObtenerLibros(this.getLibroRepository());
  }

  static getObtenerLibroUseCase() {
    return new ObtenerLibro(this.getLibroRepository());
  }

  static getCrearLibroUseCase() {
    return new CrearLibro(this.getLibroRepository());
  }

  static getActualizarLibroUseCase() {
    return new ActualizarLibro(this.getLibroRepository());
  }

  static getEliminarLibroUseCase() {
    return new EliminarLibro(this.getLibroRepository());
  }

  static getLibroController() {
    return new LibroController(
      this.getObtenerLibrosUseCase(),
      this.getObtenerLibroUseCase(),
      this.getCrearLibroUseCase(),
      this.getActualizarLibroUseCase(),
      this.getEliminarLibroUseCase(),
    );
  }
}
