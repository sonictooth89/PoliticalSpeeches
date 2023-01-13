const express = require('express');

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        res.json('Welcome from backend');
    });

module.exports = {
    homeRouter,
}