const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObj = {
            burger: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });

    router.post("/api/burgers", function(req, res) {
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(results) {
                res.json({ id: results.insertId });
            }
        );
    });
    var condition = {};

    router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.updateOne(
            { devoured: req.body.devoured },
            condition,
            function(results) {
                if (results.changeRows === 0) {
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
    });
    router.delete("/api/burgers/:id",function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.deleteOne(
            condition,
            function(results) {
                if (results.changeRows === 0) {
                    return res.status(404).end();
                } else {
                    res.status(200).end;
                }
            })

    })
});
module.exports = router; 