import { Router } from "express";
import { filmesController as UC } from '../../controllers/index.js'
import { validateData as VD } from "../../utils/index.js";

const filmesRouter = Router()

filmesRouter.get('/', UC.getListFilmes)

filmesRouter.get('/:id', VD.validateId, UC.getFilmeById)



export { filmesRouter }
