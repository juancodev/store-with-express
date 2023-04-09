const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  response.json([{
      category: 'Shirts'
    },
    {
      category: 'Pants'
    },
    {
      category: 'Shoes'
    }
  ]);
});

router.get('/:categoryId', (request, response) => {
  const {
    categoryId
  } = request.params;
  response.json({
    categoryId,
    category: 'Shirt'
  });
});

router.get('/:categoryId/products/:productId', (request, response) => {
  const {
    categoryId,
    productId
  } = request.params;
  response.json({
    categoryId,
    productId,
  });
});

router.post('/', (request, response) => {
  const body = request.body;
  response.status(201).json({
    message: "Created Category Successfully",
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
    data: body
  });
});

router.patch('/:id', (request, response) => {
  const {
    id
  } = request.params;
  const body = request.body;
  response.status(200).json({
    id,
    data: body
  });
});

router.delete('/:id', (request, response) => {
  const {
    id
  } = request.params;
  response.json({
    id,
    message: "Deleted category successful"
  })
})
module.exports = router;
