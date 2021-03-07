exports.getAllUsers = async (req, res, next) => {
    res.status(201).json({
        status: 'sucess'
    })
    next();
}