const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    name: {
        type : String
    },
    email: {
        type : String
    },
    phone: {
        type : String
    },
    amount: {
        type : String
    },
    paymentId: {
        type: String
    }
})

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment