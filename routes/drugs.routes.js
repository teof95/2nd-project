const express = require('express');
const router = express.Router();

const Drug = require('../models/drug.model')


//render the drugs page.
router.get("/drugs", (req, res, next) => {
    Drug.find({})
        .then((drugsDB) =>
            res.render("drugs", { drugsDB })
        )
        .catch((error) => `Error while fetching all drugs: ${error}`);
});

//render the drugs details page.
router.get("/Drugs/:id", (req, res, next) => {
    const { id } = req.params;

    Drug.findById(id)
        .then((foundDrug) => res.render("drug-details", foundDrug))
        .catch((error) => `Error while finding book: ${error}`);
});



module.exports = router;