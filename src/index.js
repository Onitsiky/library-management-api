import express, {json} from 'express';
import cors from 'cors';
import books from './route/books';

const app = express();

//Middlewares
app.use(json());
app.use(cors());

//Routes
app.get('/tic', (req, res) => {
    //If the internet is slow
    setTimeout(() => res.send('tac'),750);
});

// Books
app.get('/books', books.getAll)
app.get('/books/{id}', books.getById)

//Connectivity
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started, listen on port ${port}`);
});
