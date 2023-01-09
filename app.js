const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('Welcome from backend!')
});

app.listen(3000, () => {
    console.log('Server started on port 3000: http://localhost:3000/');
});