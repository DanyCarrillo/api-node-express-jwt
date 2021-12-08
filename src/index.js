const express = require('express');
const routerApi = require('./core/routes');
const PORT = process.env.PORT ||  3000;


const app = express();
app.use(express.json());
routerApi(app);

app.get('/', (req, res) => {
  res.status(200).send('Hola mundo');
})

app.listen(PORT, ()=> {
  console.log(`http://localhost:${PORT}`);
})
