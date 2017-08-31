const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

// app
const app = express();

app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/dist')));


app.listen(process.env.PORT || 8080, () => {

    console.log('This app listening on port 3000!');

});
app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

console.log('running');


// -module.exports = app;
