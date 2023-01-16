const express = require('express');
const { homeRouter } = require('./routers/home');
const { evaluationRouter } = require('./routers/evaluation');
const { speech1Router, speech2Router, speech3Router } = require('./routers/speeches');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/home', homeRouter);
app.use('/evaluation', evaluationRouter);
app.use('/speech1', speech1Router);
app.use('/speech2', speech2Router);
app.use('/speech3', speech3Router);

app.listen(3000, () => {
    console.log(`Server started: http://localhost:${port}/`);
});
