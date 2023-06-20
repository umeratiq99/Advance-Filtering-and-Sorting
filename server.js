const express = require('express');
const Routes = require('./router/userRoutes');

const app = express();

app.use(express.json());
app.use('/users', Routes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
