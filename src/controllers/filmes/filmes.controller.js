import { filmesData } from '../../mock/index.js';

class FilmesController {
    getListFilmes(req, res) {
        const { page, count, genero } = req.query;

        const newPage = parseInt(page) || 1;
        const newCount = parseInt(count) || 10;

        let filmes = filmesData;

        if (genero) {
            filmes = filmesData.filter((f) =>
                f.genero.map((g) => g.toLowerCase()).includes(genero.toLowerCase())
            );
        }

        const startIndex = (newPage - 1) * newCount;
        const endIndex = startIndex + newCount;
        const paginatedFilmes = filmes.slice(startIndex, endIndex);

        res.status(200).json({
            page: newPage,
            count: newCount,
            total: filmes.length,
            data: paginatedFilmes
        });
    }

    getGenerosFilmes(req, res) {
        try {
            const generosCount = {}

            filmesData.forEach((f) => {
                f.genero.forEach((g) => {
                    generosCount[g] = (generosCount[g] || 0) + 1
                })
            })

            const generosList = Object.entries(generosCount).map(([genero, count]) => ({
                genero,
                count
            }))

            return res.json(generosList)
        } catch (error) {
            return res.status(500).json({ status: "Error" })            
        }
    }

    getFilmeById(req, res) {
        const { id } = req.params

        try {
            const filme = filmesData.find((f) => f.id === id)

            if (!filme) {
                return res.status(404).json({
                    status: "Error",
                    menssagem: "Filme não encontrado."
                })
            }

            return res.json(filme)
        } catch (error) {
            return res.status(500).json({ status: "Error" })
        }
    }
    
    getFilmeSlug(req, res) {
        const { slug } = req.params

        try {
            const filmeSlug = filmesData.filter((f) => f.slug === slug)

            if (!filmeSlug) {
                return res.status(404).json({
                    status: "Error",
                    menssagem: "Não foi possivel encontrar o filme."
                })
            }

            return
        } catch (error) {
            return res.status(500).json({ status: "Error" })
        }
    }
    
    getFilmesSearch(req, res) {
        const { search } = req.params

        try {
            const filmesSearch = filmesData.filter((f) => 
                f.titulo.toLowerCase().includes(search.toLowerCase()) ||
                f.tituloOriginal.toLowerCase().includes(search.toLowerCase()) ||
                f.genero.some((g) => g.toLowerCase().includes(search.toLowerCase())) ||
                f.diretor.toLowerCase().includes(search.toLowerCase()) ||
                f.elenco.some((e) => e.toLowerCase().includes(search.toLowerCase())) ||
                f.pais.toLowerCase().includes(search.toLowerCase()) ||
                f.idioma.toLowerCase().includes(search.toLowerCase())
            )

            if (filmesSearch.length === 0) {
                return res.status(404).json({
                    status: "Error",
                    menssagem: "Nenhum filme encontrado com os critérios de busca fornecidos."
                })
            }

            return res.json(filmesSearch)
        } catch (error) {
            return res.status(500).json({ status: "Error" })            
        }
    }

    getFilmesEmCartaz(req, res) {
        try {
            const filmesEmCartaz = filmesData.filter((f) => f.emCartaz)

            if (filmesEmCartaz.length === 0) {
                return res.status(404).json({
                    status: "Error",
                    menssagem: "Nenhum filme em cartaz no momento."
                })
            }

            return res.json(filmesEmCartaz)
        } catch (error) {
            return res.status(500).json({ status: "Error" })            
        }
    }

    getElencoFilmes(req, res) {
        try {
            const elencoFilmes = filmesData.map((f) => ({
                titulo: f.titulo,
                elenco: f.elenco
            }))

            return res.json(elencoFilmes)
        } catch (error) {
            return res.status(500).json({ status: "Error" })            
        }
    }

    getAutoresFilmes(req, res) {
        try {
            const autoresFilmes = filmesData.map((f) => ({
                titulo: f.titulo,
                diretor: f.diretor
            }))

            return res.json(autoresFilmes)
        } catch (error) {
            return res.status(500).json({ status: "Error" })            
        }
    }

    postNewFilme(req, res) {}

    putFilme(req, res) {}

    patchFilme(req, res) {}
    
    deleteFilme(req, res) {}
}

export const filmesController = new FilmesController()