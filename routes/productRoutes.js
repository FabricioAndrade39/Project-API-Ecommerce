import { Router } from 'express';
import ProductRepositoryRepository from '../repository/ProductRepository.js';

const router = Router();

router.get('/', async (req, res) => {
  const result = await new ProductRepository().getAll();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await new ProductRepository().getById(id);
  res.status(200).send(result);
});

export default router;
