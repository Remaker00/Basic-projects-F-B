const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./backend/config/database'); // Import your Sequelize setup
const signupRoutes = require('./backend/routes/signup');
const loginRoutes = require('./backend/routes/login');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use(signupRoutes);
app.use(loginRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
