import { Router } from "express";
import { filmesController as UC } from '../../controllers/index.js'
import { validateData as VD } from "../../utils/index.js";

const filmesRouter = Router()

filmesRouter.get('/', UC.getListFilmes)

filmesRouter.get('/generos', UC.getGenerosFilmes)

filmesRouter.get('/:id', VD.validateId, UC.getFilmeById)

filmesRouter.get('/slug/:slug', UC.getFilmeSlug)

filmesRouter.get('/search/:search', UC.getFilmesSearch)

filmesRouter.get('/em-cartaz', UC.getFilmesEmCartaz)

filmesRouter.get('/elenco', UC.getElencoFilmes)

filmesRouter.get('/autores', UC.getAutoresFilmes)

export { filmesRouter }
