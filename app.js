const express = require('express');

const app = express();

// when the browser issue a GET for /assets/style.css, fire up the /assets endpoint
// and look for the specific static files after /assets in the folder public
app.use('/assets', express.static(`${__dirname}/public`));

// custom middleware
// leave out the route, so it happens for every route
app.use('/', function (req, res, next) {
   console.log(`Request URL: ${req.url}`);
   next();
});



app.get('/', (req, res) => {
    console.log(req.body);
    res.send('<html><head><link rel="stylesheet" href="/assets/style.css"/></head></head><body><h1>Hello World!</h1></body></html>');
})

app.get('/person/:id', (req, res) => {
    console.log(req.body);
    res.send(`
    <html><body><h1>Person ${req.params.id}</h1></body></html>
`);
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
