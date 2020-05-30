const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(`Image A received a ${req.method} request!`);
    res.send('Hello World from image a');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
