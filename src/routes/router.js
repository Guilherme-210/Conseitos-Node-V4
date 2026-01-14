import { Router } from 'express'
import { filmesRouter } from './filmes/router.js'

const router = Router()

router.get('/test', (req, res) => {
    res.json({
        status: 'OK',
        mensagem: 'API funcionando'
    })
})

router.use('/filmes', filmesRouter)

export { router }
