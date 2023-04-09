const {
  faker
} = require('@faker-js/faker')

class CategoriesServices {
  constructor() {
    this.categories = [{
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      },
      {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      },
      {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
      }
    ]
  }

  create() {

  }

  find() {
    return this.categories;
  }

  findOnlyOne() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = CategoriesServices;
