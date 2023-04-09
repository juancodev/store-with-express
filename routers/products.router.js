const express = require('express');
const {
  faker
} = require('@faker-js/faker');

const router = express.Router();

router.get('/', (request, response) => {
  const {
    size
  } = request.query;
  const limit = size || 10;
  const products = []
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image()
    })
  }
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
  response.json({
    id,
    name: 'Product 1',
    price: 1000
  })
});

router.post('/', (request, response) => {
  const body = request.body;
  response.status(201).json({
    message: "Created",
    data: body
  });
});

router.put('/:id', (request, response) => {
  const {
    id
  } = request.params;
  const body = request.body;
  response.json({
    id,
    message: "Change product update",
    data: body
  });
});

router.patch('/:id', (request, response) => {
  const {
    id
  } = request.params;
  const body = request.body;
  response.json({
    id,
    message: "Change product update",
    data: body
  });
});

router.delete('/:id', (request, response) => {
  const {
    id
  } = request.params;
  response.json({
    id,
    message: "Deleted Product Successfully"
  })
})

module.exports = router;
