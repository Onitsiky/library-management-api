import express, {json} from 'express';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors())

app.get('/tic', (err, res)=> {
    res.send('tac')
})

app.listen(8080, ()=> {
    console.log('Server started, listen on port 8080');
})