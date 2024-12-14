import { Request, Response } from "express";

import ActualizarLibro from "../../application/ActualizarLibro";
import CrearLibro from "../../application/CrearLibro";
import EliminarLibro from "../../application/EliminarLibro";
import ObtenerLibro from "../../application/ObtenerLibro";
import ObtenerLibros from "../../application/ObtenerLibros";
import Libro from "../../domain/entities/Libro";

export default class LibroController {
    constructor(
        private readonly obtenerLibros: ObtenerLibros,
        private readonly obtenerLibro: ObtenerLibro,
        private readonly crearLibro: CrearLibro,
        private readonly actualizarLibro: ActualizarLibro,
        private readonly eliminarLibro: EliminarLibro,
    ) {
        
    }

    async getLibros(req: Request, res: Response){

        try {
            const result = await this.obtenerLibros.ejecutar();
            res.send({libros: result});
            
        } catch (error: any) {
            console.log("🚀 ~ LibroController ~ getLibros ~ error:", error)
            res.status(500).send({message: error.message})
        }
    }

    async getLibro(req: Request, res: Response){
        const libroId = req.params.id;

        try {
            const result = await this.obtenerLibro.ejecutar(Number(libroId));
            res.send({libro: result});
            
        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
    }

    async postLibro(req: Request, res: Response){
        const {
            id,
            titulo,
            paginas,
            precio,
            fecha_publicacion,
            usuario_id,
        } = req.body;
        const libro = new Libro(id, titulo, paginas, precio, fecha_publicacion, usuario_id);
        console.log("🚀 ~ LibroController ~ postLibro ~ libro:", libro)

        try {
            await this.crearLibro.ejecutar(libro);
            res.send({mensaje: 'Libro creado', libro});
            
        } catch (error: any) {
            console.log("🚀 ~ LibroController ~ postLibro ~ error:", error)
            res.status(500).send({message: error.message})
        }
    }

    async putLibro(req: Request, res: Response){
        const {
            id,
            titulo,
            paginas,
            precio,
            fecha_publicacion,
            usuario_id,
        } = req.body;
        const libro = new Libro(Number(id), titulo, paginas, precio, fecha_publicacion, usuario_id);

        try {
            await this.actualizarLibro.ejecutar(libro);
            res.send({mensaje: 'Libro actualizado', libro});
            
        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
    }

    async deleteLibro(req: Request, res: Response){
        const libroId = req.params.id;

        try {
            await this.eliminarLibro.ejecutar(Number(libroId));
            res.send({mensaje: 'Libro eliminado'});
            
        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
    }
}