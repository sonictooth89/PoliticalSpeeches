const express = require('express');
const { homeRouter } = require('./routers/home');
const { evaluationRouter } = require('./routers/evaluation');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/home', homeRouter);
app.use('/evaluation', evaluationRouter);

app.listen(3000, () => {
    console.log(`Server started: http://localhost:${port}/`);
});
