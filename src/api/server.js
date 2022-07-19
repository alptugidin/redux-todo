// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';

const app = express();

app.get('/todos', (req, res) => {
  res.send('ok');
});

app.listen(3001, () => {
  console.log('SW START');
});
