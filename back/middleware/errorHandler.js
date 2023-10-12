module.exports = function errorHandler (err, req, res, next) {
    if (err.name === 'CastError') {
        return res.status(400).send({ message: 'ID not valid' })
    }
    res.status(500).send({ message: err.message })
}
