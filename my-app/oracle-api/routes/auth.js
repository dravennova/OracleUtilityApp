const express = require('express');
const router = express.Router();
const { getConnection } = require('../utils/db');
const bcrypt = require('bcrypt');
const oracledb = require('oracledb');

const SALT_ROUNDS = 10;

router.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName, phone } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    let connection;
    try {
        connection = await getConnection();

        const existing = await connection.execute(
            `SELECT CUSTOMER_ID FROM CUSTOMERS WHERE EMAIL = :email`,
            [email],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        if (existing.rows.length > 0) {
            return res.status(409).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        await connection.execute(
            `INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME, PHONE, EMAIL, PASSWORD)
             VALUES (:firstName, :lastName, :phone, :email, :hashedPassword)`,
            { firstName, lastName, phone, email, hashedPassword },
            { autoCommit: true }
        );

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ error: 'Server error' });
    } finally {
        if (connection) await connection.close();
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    let connection;

    try {
        connection = await getConnection();

        const result = await connection.execute(
            `SELECT CUSTOMER_ID, EMAIL, PASSWORD FROM CUSTOMERS WHERE EMAIL = :email`,
            [email],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = result.rows[0];

        const passwordMatch = await bcrypt.compare(password, user.PASSWORD);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = generateToken(user);
        res.json({ token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        if (connection) await connection.close();
    }
});


module.exports = router;
