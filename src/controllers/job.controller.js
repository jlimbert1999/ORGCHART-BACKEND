const router = require('express').Router()
const { request, response, text } = require('express');

const jobService = require('../services/job.service')

router.get('', async (req = request, res = response) => {
    try {
        const jobs = await jobService.get()
        return res.status(200).json({
            ok: true,
            jobs
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})
router.get('/search/job/officer/:text', async (req = request, res = response) => {
    try {
        const jobs = await jobService.searchJobForUser(req.params.text)
        return res.status(200).json({
            ok: true,
            jobs
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})
router.get('/organization', async (req = request, res = response) => {
    try {
        const data = await jobService.getOrganization()
        return res.status(200).json({
            ok: true,
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})
router.get('/search/dependents/:text', async (req = request, res = response) => {
    try {
        const jobs = await jobService.searchDependents(req.params.text)
        return res.status(200).json({
            ok: true,
            jobs
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})
router.get('/dependents/:id', async (req = request, res = response) => {
    try {
        const jobs = await jobService.getDependentsOfSuperior(req.params.id)
        return res.status(200).json({
            ok: true,
            jobs
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error in server'
        })
    }
})
router.delete('/dependent/:id', async (req = request, res = response) => {
    try {
        const jobs = await jobService.removeDependent(req.params.id)
        return res.status(200).json({
            ok: true,
            jobs
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