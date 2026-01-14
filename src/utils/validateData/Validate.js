class ValidateData {
    validateId(req, res, next) {
        const { id } = req.params

        try {
            if (!id) {
                return res.status(404).json({
                    status: "Error",
                    menssagem: "O ID do filme e obrigatorio!"
                })
            }

            next()
        } catch (error) {
            return res.ststus(500).json({
                status: "Error",
                menssagem: "Error interno! Tente novamente mais tarde."
            })
        }
    }
}

export const validateData = new ValidateData()