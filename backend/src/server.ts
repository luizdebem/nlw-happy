import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.get('/users/:id', (req, res) => {
  return res.status(200).json({ message: 'hello world' });
});

app.listen(3333);