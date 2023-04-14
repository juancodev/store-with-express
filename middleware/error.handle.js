function logError(error, request, response, next) {
  console.log('logError');
  console.log(error.message);
  next(error);
};

function errorHandle(error, request, response, next) {
  response.status(500).json({
    message: error.message,
    stack: error.stack
  });
};

function boomErrorHandle(error, request, response, next) {
  if (error.isBoom) {
    const {
      output
    } = error;
    response.status(output.statusCode).json(output.payload);
  } else {
    next(error);
  }

};

module.exports = {
  logError,
  errorHandle,
  boomErrorHandle
};
