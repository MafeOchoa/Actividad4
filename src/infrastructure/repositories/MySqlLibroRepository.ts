import { ResultSetHeader } from "mysql2";
import Libro from "../../domain/entities/Libro";
import LibroRepository from "../../domain/interfaces/LibroRepository";
import poolMySql from "../database/mysql";

export default class MySqlLibroRepository implements LibroRepository {
    constructor() {

    }
    async findAll(): Promise<Libro[]> {
        console.log('Getting books');
        
        const conexion = await poolMySql.getConnection();
        const [rows, fields] = await conexion.query('SELECT * FROM tablalibro');
        console.log("🚀 ~ MySqlLibroRepository ~ //returnnewPromise ~ result:", [rows, fields]);
        conexion.release();
        return rows as Libro[];
    }
    async findById(id: number): Promise<Libro | null> {
        const conexion = await poolMySql.getConnection();
        const sql = 'SELECT * FROM `tablalibro` WHERE `id` = ?';
        const values = [id];
        const [rows, fields] = await conexion.query(sql, values);
        console.log("🚀 ~ MySqlLibroRepository ~ //returnnewPromise ~ result:", [rows, fields]);
        conexion.release();
        return (rows as unknown[])[0] as Libro;
    }
    async create(libro: Libro): Promise<void> {
        console.log("🚀 ~ MySqlLibroRepository ~ create ~ libro:", libro)
        const conexion = await poolMySql.getConnection();
        const sql = `INSERT INTO tablalibro (id, titulo, paginas, precio, fecha_publicacion, usuario_id)
        VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [libro.id, libro.titulo, libro.paginas, libro.precio, libro.fecha_publicacion, libro.usuario_id];
        const [rows, fields] = await conexion.query(sql, values);
        conexion.release();
        console.log("🚀 ~ MySqlLibroRepository ~ //returnnewPromise ~ result:", [rows, fields]);
    }
    async update(libro: Libro): Promise<void> {
        const conexion = await poolMySql.getConnection();
        const sql = `UPDATE tablalibro SET titulo = ?, paginas = ?, precio = ?, fecha_publicacion = ?, usuario_id = ?
        WHERE id = ?`;
        const values = [libro.titulo, libro.paginas, libro.precio, libro.fecha_publicacion, libro.usuario_id ?? null, libro.id];
        const [rows, fields] = await conexion.query(sql, values);
        console.log("🚀 ~ MySqlLibroRepository ~ //returnnewPromise ~ result:", [rows, fields]);
        conexion.release();
    }
    async delete(id: number): Promise<void> {
        const conexion = await poolMySql.getConnection();
        const sql = 'DELETE FROM `tablalibro` WHERE `id` = ?';
        const values = [id];
        const [rows, fields] = await conexion.query(sql, values);
        console.log("🚀 ~ MySqlLibroRepository ~ //returnnewPromise ~ result:", [rows, fields]);
        conexion.release();
    }
}