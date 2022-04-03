const express = require('express');
const app = express();

const morgan = require('morgan');
const route = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));

route(app);
``
const port = 8081;
const host = 'localhost';
app.listen(port, host, () => {
   console.log(`Server is listening at http://${host}:${port}/api`);
});