const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// using this middleware for the CORS error
app.use(cors());

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
   if (a && b) {
    res.send(`${a+b}`);
  } else {
    res.send("Enter both numbers");
  }
});

app.listen(port, () => {
  console.log(`server is running on 3000!`)
})