const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const data = require('./data/dataserver.json');

app.get('/', (req, res) => {
    res.send('sever running')
});

app.get('/course', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log('My dragon news server running', port);
})