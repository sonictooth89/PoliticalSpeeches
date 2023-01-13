const express = require('express');
const { mostSpeeches, mostSecurity, mostWords } = require('../utils/evaluationFile');

const evaluationRouter = express.Router();

evaluationRouter
    .get('/', async (req, res) => {
        console.log('Done!');
    });

module.exports = {
    evaluationRouter,
}