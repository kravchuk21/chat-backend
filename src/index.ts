import express, {Request, Response} from 'express';
import 'dotenv/config'
import cors from "cors"

const app = express()
const port = process.env.PORT || 3003

app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})