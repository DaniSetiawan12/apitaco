const router = require('express').Router()
const history = require('../controller/perintah')

router.post("/input", (req, res) => {
    history.inputHistory(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

router.delete("/hapus/:id", (req, res) => {
    history.hapusData(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

module.exports = router

