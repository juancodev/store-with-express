const express = require('express');
const ProductsServices = require('../services/products.services');

const router = express.Router();
const service = new ProductsServices();

router.get('/', async (request, response) => {
  const products = await service.find();
  response.json(products);
});

//Order
router.get('/filter', (request, response) => {
  response.send('This is a filter');
});

router.get('/:id', async (request, response, next) => {
  // const id = request.params.id;
  try {
    const {
      id
    } = request.params
    const product = await service.findOnlyOne(id);
    response.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response) => {
  const body = request.body;
  const newProduct = await service.created(body);
  response.status(201).json(newProduct);
});

router.put('/:id', async (request, response) => {
  const {
    id
  } = request.params;
  const body = request.body;
  const product = await service.update(id, body);
  response.json(product);
});

router.patch('/:id', async (request, response, next) => {
  try {
    const {
      id
    } = request.params;
    const body = request.body;
    const product = await service.update(id, body);
    response.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const {
      id
    } = request.params;
    const result = await service.delete(id);
    response.json(result);
  } catch (error) {
    response.status(404).json({
      message: error.message
    });
  };
});

module.exports = router;
