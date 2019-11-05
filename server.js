const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => console.log('port 3000'));
