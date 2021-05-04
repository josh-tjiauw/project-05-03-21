require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const path = require('path');

const app = express();

app.use(staticMiddleware);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
