const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;


app.use(express.static(publicPath));
app.listen(port, ()=> {
  console.log('server is up');
}); // which port should node use to setup server

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.js'));
}) // this fn made it is possible to go direct to site (without this is become error  )