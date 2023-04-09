const express = require('express');
const ProductsServices = require('../services/products.services');

const router = express.Router();
const service = new ProductsServices();

router.get('/', (request, response) => {
  const products = service.find();
  response.json(products);
});

//Order
router.get('/filter', (request, response) => {
  response.send('This is a filter');
});

router.get('/:id', (request, response) => {
  // const id = request.params.id;
  const {
    id
  } = request.params
  const product = service.findOnlyOne(id);
  response.json(product);
});

router.post('/', (request, response) => {
  const body = request.body;
  const newProduct = service.created(body);
  response.status(201).json(newProduct);
});

router.put('/:id', (request, response) => {
  const {
    id
  } = request.params;
  const body = request.body;
  const product = service.update(id, body);
  response.json(product);
});

router.patch('/:id', (request, response) => {
  const {
    id
  } = request.params;
  const body = request.body;
  const product = service.update(id, body);
  response.json(product);
});

router.delete('/:id', (request, response) => {
  const {
    id
  } = request.params;
  const result = service.delete(id);
  response.json(result);
});

module.exports = router;
