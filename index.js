const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')
const cors = require('cors');
const { urlencoded } = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use("",router)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


