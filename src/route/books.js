import client from '../config/db/connection';

const getAll = async (req, res) => {
  client.connect();
  const allBooks = await client.query('select * from books');
  res.json(allBooks);
};

const getById = async (req, res) => {
  const id = req.path.id;
  client.connect();
  const book = await client.query(`select * from books where id = ${id}`);
  res.json(book);
};

const books = {
  getAll,
  getById,
};

export default books;
