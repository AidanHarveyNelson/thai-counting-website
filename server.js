const express = require('express');
const generate = require('./assets/js/generate.js')
const app = express();
const port = process.env.port || 5000;
const router = express.Router();
var path=require('path');

app.use(express.static(
    path.join(__dirname, 'assets'))
);

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/thaigame', (req, res) => {
    res.sendFile('assets/html/thai_game.html', {root: __dirname});
});

// Generate List of Variables to Use
app.get('/thaigame/generate', (req, res) => {
    var num_list = []
    for (i of Array(parseInt(req.query.games)).keys()) {
        num_list.push(generate.generate_random_thai_number(req.query.max, req.query.min))
    }
    res.send(num_list)
});

app.use('/', router);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
