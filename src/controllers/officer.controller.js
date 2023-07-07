const router = require('express').Router()
const { request, response } = require('express');

const funcionarioService = require('../services/officer.service')
router.get('', async (req = request, res = response) => {
    try {
        const officers = await funcionarioService.get()
        return res.status(200).json({
            ok: true,
            officers
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})

module.exports = router