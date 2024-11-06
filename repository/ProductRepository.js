import BaseRepository from './BaseRepository.js';

class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll('products', [
        'id',
        'name',
        'price_in_cents',
        'size',
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById(
        'products',
        ['id', 'name', 'price_in_cents', 'size'],
        id
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

<<<<<<< HEAD
export default ProductRepositoryRepository;
=======
export default ProductRepository;
>>>>>>> db-express
