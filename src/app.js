import express from 'express'
import cors from 'cors'
import { router } from './routes/router.js'

const app = express()

app.use(express.json())
app.use(cors()) 

app.get('/', (req, res) => {
    res.json({
        status: "Ok",
        menssagem: "O sistema esta funcionando!"
    })
})

app.use('/api', router)

export { app }