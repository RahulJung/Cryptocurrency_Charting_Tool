const express = require('express');
const path = require('path');
const axios = require('axios');
const moment = require('moment');
const app = express();
const port = 7070;

app.use(express.static(path.join(__dirname, '../client/dist')));

// var startDate = moment().subtract(10, 'days').format('YYYY-MM-DD');
var endDate = moment().format('YYYY-MM-DD');

app.get("/bpi", (req, res) => {
  axios.get(
    `https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=${endDate}`
  )
    .then(response => {
      res.send(response.data)
    })
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})

