const express = require('express');

const homeRouter = express.Router();

homeRouter
    .get('/', (req, res) => {
        
        res.json('Hello from backend!')
    });
module.exports = {
    homeRouter,
}