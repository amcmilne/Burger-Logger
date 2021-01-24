const express = require("express");
const burgers = require("../models/burgers");

const router = express.Router();

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });

    router.post("/api/burgers", function (req, res) {
        burgers.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function (results) {
                res.json({ id: results.insertId });
            }
        );
    });
    router.put("/api/burger/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log(" conditon", condition);
        burgers.updateOne({ devoured: req.body.devoured }, condition, function (results) {
            if (results, changeRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    router.deleteOne(condition, function (results) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burgers.deleteOne(condition, function (results) {
            if ((results, changeRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end;
            }
        })

    })
});
module.exports = router; 