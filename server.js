const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to express');
});
app.get('/about', (req, res) => {
    res.send('Welcome to About section');
});
app.get('/blog', (req, res)  => {
    res.send('Welcome to Blog section');
});

app.listen(3000, () => {
    console.log('listening on 3000')
});