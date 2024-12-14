import express from 'express';

import DependencyContainer from "../DependencyContainer";
const router = express.Router();

router.get('/', (req, res) => DependencyContainer.getLibroController().getLibros(req, res));
router.get('/:id', (req, res) => DependencyContainer.getLibroController().getLibro(req, res));
router.post('/', (req, res) => DependencyContainer.getLibroController().postLibro(req, res));
router.put('/', (req, res) => DependencyContainer.getLibroController().putLibro(req, res));
router.delete('/:id', (req, res) => DependencyContainer.getLibroController().deleteLibro(req, res));

export default router;
