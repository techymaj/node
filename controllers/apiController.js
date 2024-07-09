const bodyParser = require("body-parser");
const urlencondedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

module.exports = function (app) {
    app.post('/person', urlencondedParser, (req, res) => {
        res.send('Thank you!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    })

    app.get('/api', (req, res) => {
        res.json(
            {
                name: "Majaliwa M. Wilfried",
                age: 29
            }
        )
    });

    app.post('/personjson', jsonParser, (req, res) => {
        res.send('Thank you for the JSON data!');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    })
}