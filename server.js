const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let regUsers = [];

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.post('/user', (req, res) => {
    regUsers.push(req.body);
    console.log('regUsers - ', regUsers);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('port 3000'));
