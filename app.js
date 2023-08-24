const express = require('express');
const app = express();

app.use(express.static('fronted'));

app.listen(3000, ()=> {
    console.log("App is running at port 3000");
});