const express = require('express');
const acaiController = require('../controllers/acaiController');

const router = express.Router();

router.route('/').
get(acaiController.getAllAcai).
post(acaiController.createAcai);

router.route('/:id').
get(acaiController.getOneAcai).
patch(acaiController.updateAcai).
delete(acaiController.deleteAcai);

module.exports = router;