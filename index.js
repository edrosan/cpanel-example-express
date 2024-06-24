import express, { json } from 'express';
import cors from 'cors';


const app = express();
app.disable('x-powered-by');
app.use(cors())
app.use(json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    author: 'edrosan',
    message: 'Translating API',
    version: '0.0.1'
  });
})


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})