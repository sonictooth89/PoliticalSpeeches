const express = require('express');

const homeRouter = express.Router();

const a = () => {
     const b = 2 + 5;
     return b;
}

homeRouter
    .get('/', (req, res) => {
        res.json(`Cos tam ${a()}`);
    });

module.exports = {
    homeRouter,
}