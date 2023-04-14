const express = require('express');
const routerAPI = require('./routers/index');
const {
  logError,
  errorHandle,
  boomErrorHandle
} = require('./middleware/error.handle');

const app = express();
const port = 6061;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello, mi server on express');
});

routerAPI(app);

app.use(logError);
app.use(boomErrorHandle);
app.use(errorHandle);

app.listen(port, () => {
  console.log('my port: ' + port);
});
