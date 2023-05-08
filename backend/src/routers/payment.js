const express = require('express')
var crypto = require('crypto')
const Razorpay = require("razorpay");
const router = new express.Router()
require('dotenv').config();
const cors = require('cors')

const Payment = require('../model/paymentmodel');


router.use(
    cors({
        origin: '*',
    }),
)

const instance = new Razorpay({
    key_id: "rzp_test_9wyk1IQemxOlUV",
    key_secret: "X6quBAYHoyH6OMIqklvErExj",
});


router.post('/orders', (req, res) => {

    var options = {
        amount: req.body.amount * 100,
        currency: "INR"
    }

    instance.orders.create(options, (err, order) => {
        if (err) {
            return res.send({ code: 500, message: 'Server Error' })
        }
        return res.send({ code: 200, message: 'order created', data: order })
    })

})

router.post('/verify', (req, res) => {
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSign = crypto.createHmac('sha256', 'X6quBAYHoyH6OMIqklvErExj')
        .update(body.toString())
        .digest('hex');

    if (expectedSign === req.body.response.razorpay_signature) {
        res.send({ code: 200, message: ' Sign Valid' })
    }
    else {
        res.send({ code: 200, message: ' Sign Invalid' })
    }

})

router.post('/addpayment', async (req, res) => {
    
    const _payment = new Payment({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        amount: req.body.amount,
        paymentId: req.body.paymentId
    })
    
    try {
        await _payment.save()
        res.status(201).send(_payment);
    }
    catch (e) {
        res.status(400).send(e);
    }

})

router.get('/donaters', async(req, res) => {
    try {
        const payments = await Payment.find({}).sort({"amount": -1});
        res.status(200).send(payments);
    }
    catch (e) {
        res.status(500).send({ msg: "error while user" });
    }
})

module.exports = router