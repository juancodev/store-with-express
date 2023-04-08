const express = require('express');
const {
  faker
} = require('@faker-js/faker');

const app = express();
const port = 6060;

app.get('/', (request, response) => {
  response.send('Hello, mi server on express');
});

app.get('/products', (request, response) => {
  const {
    size
  } = request.query;
  const products = []
  for (let i = 0; i < size; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image()
    })
  }
  response.json(products);
});

//Order
app.get('/products/filter', (request, response) => {
  response.send('This is a filter');
});

app.get('/products/:id', (request, response) => {
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

app.get('/categories/', (request, response) => {
  response.json([{
      category: 'Shirts'
    },
    {
      category: 'Pants'
    },
    {
      category: 'Shoes'
    }
  ])
});

app.get('/categories/:categoryId', (request, response) => {
  const {
    categoryId
  } = request.params;
  response.json({
    categoryId,
    category: 'Shirt'
  })
});

app.get('/categories/:categoryId/products/:productId', (request, response) => {
  const {
    categoryId,
    productId
  } = request.params;
  response.json({
    categoryId,
    productId,
  })
})

app.get('/users', (request, response) => {
  const users = [{
      id: 1,
      name: 'Juan',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Cynthia',
      role: 'admin'
    },
    {
      id: 3,
      name: 'admin',
      role: 'user'
    }
  ]
  const {
    limit,
    offset
  } = request.query;
  if (limit && offset) {
    response.json({
      limit,
      offset
    });
  } else {
    response.send(users);
  }
})

app.listen(port, () => {
  console.log('my port: ' + port);
});
