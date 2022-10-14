import client from '../config/db/connection';

export const getAllBooks = async (req, res) => {
  client.connect();
  const allBooks = await client.query('select * from books');
  res.json(allBooks)
};