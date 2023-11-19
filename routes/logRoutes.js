const express = require('express')
const logController = require('../controller/logController')

const router = express.Router()

router.post('/logs', logController.createLog)
router.get('/search', logController.searchLogs)

module.exports = router
