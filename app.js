const express = require('express');
const { sequelize } = require('./util/dataB');
const userrouter = require('./Route/Userroute');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static('fronted'));

app.use(bodyparser.json());
app.use('/api/user', userrouter);

sequelize
    .sync()
    .then(() => {
        app.listen(3000, ()=> {
            console.log("App is running at port 3000");
        });
    })
    .catch((err)=> {
        console.log("Error!!");
    });