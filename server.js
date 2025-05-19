const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
    res.send('Привіт, світ!');
});

app.get('/json', (req, res) => {
    res.json({ message: 'Це JSON-відповідь' });
});


app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Користувач з ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Пошук за запитом: ${query}`);
});


app.listen(3000, () => {
    console.log('Сервер працює на http://localhost:3000');
});
