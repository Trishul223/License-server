const express = require('express');
const fs = require('fs');

const app = express();

app.get('/license/:key', (req, res) => {

  const licenses = JSON.parse(
    fs.readFileSync('./licenses.json', 'utf8')
  );

  const license =
    licenses[req.params.key];

  if (!license) {
    return res.json({
      status: 'INVALID'
    });
  }

  return res.json(license);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('License Server Running');
});
