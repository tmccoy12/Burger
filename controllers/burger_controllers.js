// Require packages and files
var express = require('express');
var router = express.Router();
    // Import the model (burger.js) to use its database functions.
  var food = require('../models/burger.js');


router.get("/", function(req, res) {
    food.all(function(data) {
        console.log(data);
        var hbsObject = {
            foods: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    food.add(["burger_name", "devoured"], [req.body.burger_name, "0"], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

     console.log("condition", condition);

    food.update({
        devoured: req.body.devoured
                }, condition, function() {
        res.redirect("/");
    });
});  
       
router.delete('/:id', function(req, res) {
                var condition = "id = " + req.params.id;
    console.log("condition", condition);
        
    food.delete(condition, function() {
        res.redirect('/');
    });
});
module.exports = router;
