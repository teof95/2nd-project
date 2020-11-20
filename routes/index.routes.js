const express = require('express');
const router = express.Router();
const Drug = require('../models/drug.model')


/* GET home page */
router.get('/', (req, res, next) => {
    Drug.find({})
        .then((drugsDB) =>
            res.render("index", { drugsDB, user: req.session.user }))
});

module.exports = router;