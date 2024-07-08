const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('<html><body><h1>Hello World!</h1></body></html>');
})

app.get('/api', (req, res) => {
    res.json(
        {
            name: "Majaliwa M. Wilfried",
            age: 29
        }
    )
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
