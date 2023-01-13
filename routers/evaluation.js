const express = require('express');
const { mostSpeeches, mostSecurity, leastWordy } = require('../utils/evaluationFile');

const evaluationRouter = express.Router();

evaluationRouter
    .get('/', async (req, res) => {
        console.log(leastWordy)
        res.json({
            mostSpeeches,
            mostSecurity,
            leastWordy
        })
    });

module.exports = {
    evaluationRouter,
}