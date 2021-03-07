const Acai = require('../models/acaiModel');

exports.getAllAcai = async (req, res, next) => {
    try {
        const AllAcai = await Acai.find();
        res.status(201).json({
            status: 'success',
            data: {
                data: AllAcai
            }
        })
        next();
    }
    catch(err) {
        console.log(err);
        next();
    }
    
}

exports.getOneAcai = async (req, res, next) => {
    try {
        const acai = await Acai.findById(req.params.id);
        res.status(201).json({
            status: 'success',
            data: {
                data: acai
            }
        })
        next();
    }
    catch(err) {
        console.log(err);
        next();
    }
}

exports.createAcai = async (req, res, next) => {
    console.log(req.body);
    try {
        const newDoc = await Acai.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                data: newDoc
            }
        })
        next();
    }
    catch(error)  {
        console.log(error);
        next();
    }
}

exports.updateAcai = async (req, res, next) => {
    
    try {
        const acai = await Acai.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        
        res.status(201).json({
            status: 'success',
            data: {
                data: acai
            }
        })
        next();
    }
    catch(err) {
        console.log(err);
        next();
    }
}

exports.deleteAcai = async (req, res, next) => {
    try {
        const acai = await Acai.findByIdAndDelete(req.params.id);

        if (!acai) return next();
        
        res.status(204).json({
            status: 'success',
            data: {
                data: null
            }
        })
        next();
    }
    catch(err) {
        console.log(err);
        next();
    }
}