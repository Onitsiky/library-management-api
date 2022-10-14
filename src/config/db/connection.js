import pg from "pg";
import dotenv from 'dotenv';

dotenv.config({path: '.env'})
const { Client } = pg;

/**
 * class client
 * 
 * how to use 
 * Just import the client here
 * 
 * Connect to the database with client.connect()
 * 
 * And make your query like this:
 * client.connect();
 * client.query('the query', (err, res) => {
 *      console.log(res.rows);
 * })
 */
const client = new Client({
    port: process.env.APP_PORT || '',
    password: process.env.APP_PASSWORD || '',
    user: process.env.APP_USER || '',
    database: process.env.APP_DATABASE || ''
});

export default client;