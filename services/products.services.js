const {
  faker
} = require('@faker-js/faker')

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.image()
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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000)
    })
  }

  async findOnlyOne(id) {
    return this.products.find(item => item.id === id);
  }

  async update(id, change) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) throw 'Product not found';
    const productCurrent = this.products[index];
    this.products[index] = {
      ...productCurrent,
      ...change
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Product not found');
    this.products.splice(index, 1);
    return {
      id,
      message: 'Deleted product successfully'
    }
  }
};

module.exports = ProductsServices;
