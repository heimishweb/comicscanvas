const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 5000;

app.use("/assets/css", express.static(__dirname + '/assets/css'));
app.use("/assets/js", express.static(__dirname + '/assets/js'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html')) //index.html lives in the "public" folder
})