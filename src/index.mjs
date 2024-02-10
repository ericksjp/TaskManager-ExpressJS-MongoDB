import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send({"msg":"primeiro passo!!!"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});