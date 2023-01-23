const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/getCitiesByCodePostal", (req, res) => {
    const zipcode = req.query.zipcode;
    axios.get(`https://geo.api.gouv.fr/communes?codePostal=${zipcode}`)
        .then(response => {
            if (response.data.length === 0) {
                res.status(400).json({
                    success: false,
                    error: 'No cities found for this postal code'
                });
            } else {
                const cities = response.data.map(city => city.nom);
                res.status(200).json({
                    success: true,
                    cities
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                error: 'Internal server error'
            });
        });
});
  

module.exports = router;