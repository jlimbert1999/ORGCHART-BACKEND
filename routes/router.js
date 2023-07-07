const router = require('express').Router()
const OfficerController = require('../src/controllers/officer.controller')

router.use('/officers', OfficerController)

module.exports = router