const express = require('express');
const bodyParser = require('body-parser');

const PORT = 7202;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Routes
app.use('/api', require('./routes'));

app.listen(PORT, function() {
    console.log(`DB started on port ${PORT}`);
});