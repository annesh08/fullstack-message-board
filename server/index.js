const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.json({
    message: "Full Stack Message Board",
  });
});

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});