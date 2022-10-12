import express, {json} from 'express';
import cors from 'cors';
import { getAllBooks } from './route/books';

const app = express();

//Middlewares
app.use(json());
app.use(cors());

//Routes
app.get('/tic', (err, res) => {
    //If the internet is slow
    setTimeout(() => res.send('tac'),750);
});


//Connectivity
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server started, listen on port ${port}`);
});
