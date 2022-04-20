import express, {Application} from 'express';
import 'dotenv/config'
import cors from 'cors'
import './core/db';
import UserController from './controllers/UserController';
import bodyParser from 'body-parser';

const app: Application = express()
const port: number = process.env.PORT ? Number(process.env.PORT) : 3003

app.use(cors())
app.use(bodyParser.json())

const User = new UserController();

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/registration', User.create);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})