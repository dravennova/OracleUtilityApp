require('dotenv').config(); //needed library for .env to work
const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors'); //required libraries

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: 'https://oracle-utility-app.vercel.app',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); //allows cors to accept requests from different origins

app.use((req, res, next) => {
  console.log('Received request with x-api-key:', req.headers['x-api-key']); 
  const key = req.headers['x-api-key'];
  if (key !== process.env.API_KEY) {
    console.log('Invalid or missing API key');
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});

app.get('/customers', async (req, res) => { //in this page, show information
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING, //connect with credentials in .env file
    });

    const result = await connection.execute(
      `SELECT customer_id, first_name, last_name, phone, email FROM customers`, //execute query
      [], //no variable to bind query to
      { outFormat: oracledb.OUT_FORMAT_OBJECT } //format data to be readable
    );

    res.json(result.rows);
    console.log("Returned: ");
    console.table(result.rows); //show data in console

  } 
  catch (err)
  {
    console.error('Database Error: ', err);
    res.status(500).json({ error: err.message }); //if error, catch error and display
  } 
  finally
  {
    if (connection)
    {
        await connection.close(); //close connection after finished
    } 
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


