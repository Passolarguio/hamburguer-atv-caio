import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
const app = express();

const port = 3000;

const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categoria',categoriaRoutes);

app.use('/avaliacoes', avaliacaoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
