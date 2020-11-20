const express = require("express");
const router = express.Router();

const Drug = require("../models/drug.model");

//render the drugs page.
router.get("/drugs", (req, res, next) => {
    if (req.session.user) {
        Drug.find({})
            .then((drugsDB) =>
                res.render("drugs", { drugsDB, user: req.session.user }))
            .catch((error) => `Error while fetching all drugs: ${error}`);
    } else {
        res.redirect('/login')
    }
});

//render the drugs-details page.
router.get("/Drugs/:id", (req, res, next) => {
    if (req.session.user) {
        const { id } = req.params;
        Drug.findById(id)
            .then((foundDrug) =>
                res.render("drug-details", { foundDrug, user: req.session.user })
            )
            .catch((error) => `Error while finding book: ${error}`);
    } else {
        res.redirect('/login')
    }
});

//render the webshop page
router.get("/webshop", (req, res, next) => {
    if (req.session.user) {
        Drug.find({})
            .then((drugsDB) => {
                //console.log("FROM DB", drugsDB);
                const newDrugsDB = drugsDB.map((element) => {
                    //console.log(element);
                    const {
                        alsoCalled,
                        _id,
                        name,
                        look,
                        method,
                        effect,
                        duration,
                        mixing,
                        addiction,
                        price,
                        image,
                        video,
                    } = element;

                    const newElement = {
                        _id,
                        name,
                        alsoCalled,
                        look,
                        method,
                        effect,
                        duration,
                        mixing,
                        addiction,
                        price: parseInt(price),
                        image,
                        video,
                        cartId: drugsDB.indexOf(element) + 1,
                    };
                    return newElement;
                });
                console.log("NEW DRUGS", newDrugsDB);
                res.render("webshop", { newDrugsDB, user: req.session.user });
            })

        .catch((error) => `Error while fetching all drugs: ${error}`);
    } else {
        res.redirect('/login')
    }
});

module.exports = router;