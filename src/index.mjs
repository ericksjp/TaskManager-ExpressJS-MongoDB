import express from 'express';
import routes from './routes/index.mjs';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({"msg":"primeiro passo!!!"});
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});