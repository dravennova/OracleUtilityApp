require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth');

const customerRoute = require('./routes/customers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({origin: 'https://oracle-utility-app.vercel.app/'}));
app.use(express.json());

app.use((req, res, next) => {
  const key = req.headers['x-api-key'];
  if(key !== process.env.API_KEY)
  {
    return res.status(403).json({error: 'Forbidden'});
  }
  next();
});

app.use('/customers', customerRoute);
app.use('/auth', authRoute);

app.listen (PORT, () => {
  console.log(`Server Running on port ${PORT}`);
})