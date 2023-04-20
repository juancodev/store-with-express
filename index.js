const express = require('express');
const routerAPI = require('./routers/index');
const cors = require('cors');
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

/*
  With constrain

 const whiteList = ['http://localhost:8080/', 'https://myapp.com'];
 const options = {
   origin: (origin, callback) => {
     if (whiteList.includes(origin) || !origin) {
       callback(null, true);
     } else {
       callback(new Error('badRequest'));
     };
   }
 };

 app.use(cors(options));
*/

app.use(cors);
app.use(logError);
app.use(boomErrorHandle);
app.use(errorHandle);

app.listen(port, () => {
  console.log('my port: ' + port);
});
