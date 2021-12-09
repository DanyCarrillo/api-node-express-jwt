const express = require('express');
const cors = require('cors');
const routerApi = require('./core/routes');
const { checkApiKey } = require('./core/middlewares/auth.middleware');
const { errorMiddleware, boomErrorMiddleware, ormErrorMiddleware } = require('./core/middlewares/error.middleware');
const PORT = process.env.PORT ||  3000;


const app = express();
app.use(express.json());

// cors
const whiteList = ['http://localhost', 'http://127.0.0.1'];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error(' Host unauthorized'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// routes
routerApi(app);

// middlewares
app.use(ormErrorMiddleware);
app.use(boomErrorMiddleware);
app.use(errorMiddleware);

app.listen(PORT, ()=> {
  console.log(`http://localhost:${PORT}`);
})
