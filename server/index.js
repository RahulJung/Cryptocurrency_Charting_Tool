const express = require('express');
const app = express();
const port = 7070;

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})