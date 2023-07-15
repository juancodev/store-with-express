const {
  faker
} = require('@faker-js/faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.image(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async created(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }

  async findOnlyOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) throw boom.notFound('Product not Found');
    if (product.isBlock) throw boom.conflict('Product is block');
    return product;
  }

  async update(id, change) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) throw boom.notFound('Product not found');
    const productCurrent = this.products[index];
    this.products[index] = {
      ...productCurrent,
      ...change
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) throw boom.notFound('Product not found');
    this.products.splice(index, 1);
    return {
      id,
      message: 'Deleted product successfully'
    }
  }
};

module.exports = ProductsServices;
