const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (request, response, next) => {
    const data = request[property];
    const {
      error
    } = schema.validate(data, {
      abortEarly: false
    });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};

module.exports = validatorHandler;
