const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'Item is required'],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    }
}, {versionKey: false, timestamps: true})

module.exports = mongoose.model('Transactions', transactionSchema)