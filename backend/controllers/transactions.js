const Transaction = require('../models/transactions');
const  ObjectID = require('mongodb').ObjectId;

// @desc Get transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({success:true, message:'transactions retrieved', data: transactions})
    } catch (err) {
        return res.status(500).json({success:false, message:err});
    }
}

// @desc Create transaction
// @route POST /api/v1/transactions
// @access Public
exports.createTransactions = async (req, res) => {
    try {
        const { item, amount } = req.body;
        const transaction = await Transaction.create({item, amount})
        return res.status(201).json({success:true, message:'new transaction created', data:transaction})
    } catch (err) {
        return res.status(422).json({success:false, message:err.message});
    }
}

// @desc Delete transaction
// @route DELETE /api/v1/transactions
// @access Public
exports.deleteTransactions = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndRemove({_id: ObjectID(req.params.id)})
        if(transaction){
            return res.status(200).json({success:true, message:'transaction deleted'});
        }else{
            return res.status(404).json({success:false, message:'transaction not found'});
        }
    } catch (err) {
        return res.status(500).json({success:false, message:err.message});
    }
}