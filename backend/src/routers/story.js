const express = require('express')
const router = new express.Router()
require('dotenv').config();
const cors = require('cors')

const Story = require('../model/storiesmodel');
const sendEmail = require('../email/account');

// sendEmail()


router.use(
    cors({
        origin: '*',
    }),
)

router.get('/event/:type', async (req, res) => {
    try {
        const events = await Story.find({ event: req.params.type });
        res.status(200).send(events);
    }
    catch (e) {
        res.status(500).send({ msg: "error while fetching the event" });
    }
})

router.post('/hostplantation', async (req, res) => {

    const plantationdetail = new Story({
        event: 'plantation',
        name: req.body.eventname,
        address: req.body.address,
        landmark: req.body.landmark,
        pin: req.body.zip,
        image: req.body.image
    })



    try {
        await plantationdetail.save();
        res.status(201).send({ msg: 'successfully added' });
    }
    catch (e) {
        res.status(400).send(e);
    }

})


router.post('/helpanimals', async (req, res) => {

    const animaldetail = new Story({
        event: 'helpanimal',
        name: req.body.name,
        address: req.body.address,
        landmark: req.body.landmark,
        pin: req.body.zip,
        image: req.body.image
    })

    try {
        await animaldetail.save()
        sendEmail(req.body.name, req.body.address, req.body.landmark, req.body.zip, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkOxpAT09fufPpLDuYGSvGqx-MwxYcgcI-Gu-agSc1g&s', 'Help Stray Animals');
        res.status(201).send({ msg: 'successfully added' });
    }
    catch (e) {
        res.status(400).send(e);
    }

})


module.exports = router;    