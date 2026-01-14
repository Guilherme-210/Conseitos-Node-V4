import { filmesData } from '../../mock/index.js';

class FilmesController {
    getListFilmes(req, res) {
        const { page, count } = req.query;

        const newPage = parseInt(page) || 1;
        const newCount = parseInt(count) || 10;

        const startIndex = (newPage - 1) * newCount;
        const endIndex = startIndex + newCount;
        const paginatedFilmes = filmesData.slice(startIndex, endIndex);

        res.json({
            page: newPage,
            count: newCount,
            total: filmesData.length,
            data: paginatedFilmes
        });
    }

    getFilmeById(req, res) {
        const { id } = req.params

        try {
            res.json({ id: id })
        } catch (error) {
            res.json({ status: "Error" })
        }
    }
    
    getFilmeSlug(req, res) {}
    
    getFilmesSearch(req, res) {}

    postNewFilme(req, res) {}

    putFilme(req, res) {}

    patchFilme(req, res) {}
    
    deleteFilme(req, res) {}
}

export const filmesController = new FilmesController()