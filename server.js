const express = require('express');
const app = express();

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

//exercise one
//method, path, callback function that runs when method and path are combined
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}`);
});

//exercise two
app.get('/roll/:number', (req, res) => {
    if (isNaN(req.params.number)) {
        res.send('You must specify a number!');
    } else {
        let randomNumber = Math.floor(Math.random() * req.params.number);
        res.send(`You rolled a ${randomNumber}`);
    }
})

//exercise three
app.get('/collectibles/:index', (req, res) => {
    if (!collectibles[req.params.index]) {
        res.send('This item is not yet in stock. Check back soon!');
    } else {
        res.send(`So you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours!`);
    }
});

app.listen(3000, () => {
    console.log('listening');
});