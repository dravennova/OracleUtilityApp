const express = require('express');
const router = express.Router();
const { getConnection } = require('../utils/db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.execute(
            'SELECT CUSTOMER_ID, FIRST_NAME, LAST_NAME, PHONE, EMAIL FROM CUSTOMERS',
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        res.json(result.rows);
    }
    catch (error) 
    {
        console.log("Database Error: ", error);
        res.status(500).json({ message: error.message });
    }
    finally
    {
        if(connection) 
        {
            await connection.close();
        }
    }
});

module.exports = router;